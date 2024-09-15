"use client";

import React from "react";

const projects = [
  {
    title: "Wind Farm Development",
    country: "Netherland",
    year: "2024",
    tags: ["Windmill", "Clean Energy"],
  },
  {
    title: "Hydro Energy Projects",
    country: "United States",
    year: "2023",
    tags: ["Hydro Power", "Clean Energy"],
  },
  {
    title: "Smart Grid Technology",
    country: "Germany",
    year: "2022",
    tags: ["Renewable Integration", "Clean Energy"],
  },
];

const ProjectList = () => {
  return (
    <section className="px-8 py-8 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
      {/* {projects.map((project, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-t py-4 first:border-t-0"  
        >
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <div className="flex space-x-4">
            <span className="text-gray-500">{project.country}</span>
            <span className="text-gray-500">{project.year}</span>
          </div>
          <div className="flex space-x-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-200 text-sm rounded-full text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))} */}

      <table className="w-full text-left table-collapse ">
        <tbody className="align-baseline">
          {projects.map((project, index) => (
            <tr key={index} className=" border-b-2">
              <td className="p-2 text-xl font-semibold md:text-[2vw] no-wrap md:py-6 py-4">{project.title}</td>
              <td className="text-gray-500">{project.country}</td>
              <td className="text-gray-500">{project.year}</td>
              <td className="p-2 font-mono text-xs text-yellow-700 whitespace-pre text-end">
                {project.tags.map((value, key) => (
                  <span
                    key={key}
                    className="px-3 py-1 bg-gray-200 text-sm rounded-full text-gray-700 mx-2"
                  >
                    {value}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectList;
