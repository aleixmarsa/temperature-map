import { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";
interface Temperature {
  high: number;
  low: number;
}
const Chart = () => {
  const [highTemperatures, setHighTemperatures] = useState<Array<number>>([]);
  const [lowTemperatures, setLowTemperatures] = useState<Array<number>>([]);

  const svgRef: any = useRef();

  useEffect(() => {
    const fetchTemperature = async () => {
      const baseURL = window.location.href;
      const response = await axios.get(`http://localhost:3000/api/1`);
      setHighTemperatures(response.data.map((month: any) => month.high));
      setLowTemperatures(response.data.map((month: any) => month.low));
    };
    fetchTemperature();
  }, []);

  useEffect(() => {
    //settinf up svg
    const w = 200;
    const h = 100;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
    //   .style("background", "#d3d3d3")
      .style("margin-top", "50")
      .style("margin-left", "50")
      .style("overflow", "visible");
    //setting the scaling (range of the values)
    const xScale = d3
      .scaleLinear()
      .domain([0, highTemperatures.length - 1])
      .range([0, w]);
    const yScale: any = d3.scaleLinear().domain([0, 60]).range([h, 0]);
    const generateScaledLine: any = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);
    //setting axis
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(highTemperatures.length)
      .tickFormat((i: any) => i + 1);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h}) `)
    svg.append("text")             
    .attr("transform",
          "translate(" + (w/2) + " ," + 
                         (h + 35) + ")")
    .style("text-anchor", "middle")
    .text("month");
    svg.append("g").call(yAxis)
    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - 40)
    .attr("x",0 - (h / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("°C");   

    //setting up the data for the svg
    svg
      .selectAll(".line")
      .data([highTemperatures])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "red");
    svg
      .selectAll(".line")
      .data([lowTemperatures])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [highTemperatures, lowTemperatures]);

  return <svg ref={svgRef}></svg>;
};

export default Chart;
