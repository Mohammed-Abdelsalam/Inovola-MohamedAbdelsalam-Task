import React, { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { DeleteProject } from "../redux/ProjectReducer";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEllipsisVertical,
  faGear,
  faRedo,
  faFilter,
  faSort,
  faFolderClosed,
  faTableColumns,
  faEllipsisH,
  faEdit,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// Components
import Modal from "./Modal";
import FormGrid from "./FormGrid";

const Grid = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.Projects);

  const [searchValue, setSearchValue] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showActions, setShowActions] = useState({});

  // For Edit
  const handleEdit = (id) => {
    const projectToEdit = projects.find((project) => project.id === id);
    setSelectedProject(projectToEdit);
    setIsModalOpen(true);
  };

  // For Delete
  const handleDelete = (id) => {
    dispatch(DeleteProject(id));
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col justify-between items-center gap-5 my-5 bg-white md:flex-row">
        <div className="flex flex-col md:flex-row gap-5 items-center bg-white">
          {["Filter Projects", "Sort Projects"].map((btnText) => (
            <button
              key={btnText}
              className="bg-white text-title px-3 py-2 shadow-md rounded-full text-md border border-gray-300 transition-transform transform hover:scale-105"
            >
              {btnText}
              {btnText === "Filter Projects" ? (
                <FontAwesomeIcon icon={faFilter} className="text-icon px-1" />
              ) : (
                <FontAwesomeIcon icon={faSort} className="text-icon px-1" />
              )}
            </button>
          ))}

          <div className="search relative flex items-center">
            <input
              type="text"
              placeholder="Try 'Project Name'"
              className="border border-gray-300 px-8 pl-5 py-2 rounded-3xl h-10"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="sm"
              className="absolute right-4 text-btnText"
            />
          </div>
        </div>

        <div className="flex gap-5 bg-white">
          {["Refresh", "Customise"].map((btnText) => (
            <button
              key={btnText}
              className="bg-white text-title px-3 shadow-md rounded-full text-md border border-gray-300 transition-transform transform hover:scale-105"
            >
              {btnText}
              {btnText === "Refresh" ? (
                <FontAwesomeIcon icon={faRedo} className="text-icon px-1" />
              ) : (
                <FontAwesomeIcon icon={faGear} className="text-icon px-1" />
              )}
            </button>
          ))}
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size="sm"
            className="bg-white rounded-full py-4 px-5 border-1 border-gray-300 flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
          />
        </div>
      </div>
      <table className="text-left min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-center px-4 py-4 w-20">
              <input type="checkbox" id="selectAllCheckbox" />
            </th>
            {[
              "Project Name",
              "Project Status",
              "Brand",
              "Contributors",
              "Project Type",
              "Due Date",
              "Actions",
            ].map((header) => (
              <th key={header} className="px-4 py-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-left bg-white divide-y divide-gray-200">
          {projects
            .filter((item) =>
              item.projectName.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <tr
                key={item.id}
                className="px-4 py-4 text-sm font-medium whitespace-nowrap"
              >
                <td className="px-12 py-5 text-sm font-medium whitespace-nowrap">
                  <input type="checkbox" id={`checkbox-${item.id}`} />
                </td>
                {[
                  <div className="text-left">
                    <FontAwesomeIcon
                      icon={faFolderClosed}
                      className="text-icon px-1 "
                    />
                    {item.projectName}
                  </div>,
                  <span
                    className={`p-3 rounded-3xl ${
                      item.projectStatus === "In Progress"
                        ? "bg-blue-400"
                        : item.projectStatus === "In Review"
                        ? "bg-yellow-400"
                        : item.projectStatus === "Cancelled"
                        ? "bg-red-400"
                        : item.projectStatus === "Approved"
                        ? "bg-green-400"
                        : "bg-gray-400"
                    }`}
                  >
                    {item.projectStatus}
                  </span>,
                  <>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-green-500">
                        <img
                          src={
                            item.brand === "Apple"
                              ? "https://www.bosshunting.com.au/wp-content/uploads/2020/08/Be076f5.jpg"
                              : item.brand === "Sony"
                              ? "https://wallpapers.com/images/high/sony-logo-black-background-36s6eft193si2tfh.webp"
                              : item.brand === "Tesla"
                              ? "https://getwalls.io/webp/large/MjAxNS8wNS90ZXNsYS1tb3RvcmEtbG9nby1sYXJnZS0xMzE3NzMzODM4LmpwZw==.webp"
                              : item.brand === "Nike"
                              ? "https://fancyodds.com/wp-content/uploads/2021/11/iPhone-Nike-Wallpaper-Background-Images-Free-Download1.jpeg"
                              : item.brand === "Athletic"
                              ? "https://fancyodds.com/wp-content/uploads/2021/11/iPhone-Nike-Wallpaper-Background-Images-Free-Download1.jpeg"
                              : item.brand === "Reebok"
                              ? "https://e0.pxfuel.com/wallpapers/337/93/desktop-wallpaper-reebok-background-reebok-logo.jpg"
                              : ""
                          }
                          alt={item.brand}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {item.brand}
                    </div>
                  </>,
                  <>
                    <div className="flex items-center relative">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-green-500">
                        <img
                          src={
                            item.contributors === "Jane Smith"
                              ? "https://s3-alpha-sig.figma.com/img/3c4e/2652/5d5aeaa88ab502b2ca2c74e9b400bcfd?Expires=1703462400&Signature=T3wRC7IOnIpRWpr2FOPvT0YLz1jNTJzta5LjkMri8277ZBKhu97s8i0GYYg-vmxMEhsFwFh22yQLNYyYjcN5tFOTukgFC87AXRcTpoo4ZKfehxfCp5WMzNT6zuHIk7xMVStM2vKM0U1eBWIQ2lcupxmtU9D5TSUZWDYbeg8DH-hYYuOcTqKiKdeLFNkYBKISyYSLV4Rnf~A1Og7jdk0k8jkjmZy~MPpJasr8jFqINIFlb-nndjxuqu8IFoP4hYda7KSoMdqdecDL1VvV-013ZXv07VnUA~twgdJLB5-HYlzvZfc4ykFU5Kl2WAZOUdd7ktKrimpp-lNlm7gt3q7hUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : item.contributors === "Alice Brown"
                              ? "https://s3-alpha-sig.figma.com/img/3c4e/2652/5d5aeaa88ab502b2ca2c74e9b400bcfd?Expires=1703462400&Signature=T3wRC7IOnIpRWpr2FOPvT0YLz1jNTJzta5LjkMri8277ZBKhu97s8i0GYYg-vmxMEhsFwFh22yQLNYyYjcN5tFOTukgFC87AXRcTpoo4ZKfehxfCp5WMzNT6zuHIk7xMVStM2vKM0U1eBWIQ2lcupxmtU9D5TSUZWDYbeg8DH-hYYuOcTqKiKdeLFNkYBKISyYSLV4Rnf~A1Og7jdk0k8jkjmZy~MPpJasr8jFqINIFlb-nndjxuqu8IFoP4hYda7KSoMdqdecDL1VvV-013ZXv07VnUA~twgdJLB5-HYlzvZfc4ykFU5Kl2WAZOUdd7ktKrimpp-lNlm7gt3q7hUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : item.contributors === "John Doe"
                              ? "https://s3-alpha-sig.figma.com/img/f0a3/3761/69c4da5e78338d8bb6dc30ecc0564f18?Expires=1703462400&Signature=ElHR9jWWQ7-X5zjB~8li04pP~sNADKRrc0BE4YcGpmj8DJ7JrhRxmU9xSMx0nG-kVf-9HBkuUAqzdCYQ58auAX57JbkdOHCG8MrwVUVseRAz8mkz~D6BDoffM0Oz3DdP-VYtNDnUEjdP84628VaA0GxS5ngOzP-QTyS9rD0yFpQbW~owKsUQ9C5Nd9TohV2QsSZmyVixcKroEVqmH85bMGGim88qL2kfAgIq~I-n0wOlX5jM-sh5coQQoC4nTvJKl5bYW07lwD0Vx7KzAOLGF8~sO2in6qLQygNo8~8uJOP3nZX~jWqRvz3Ozx9bmYB6jG1MecwkBKxBL4XXuZWRng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : item.contributors === "Bob Johnson"
                              ? "https://s3-alpha-sig.figma.com/img/26e1/3deb/4af4eac611c199ddf896e742834c62f6?Expires=1703462400&Signature=OcZdMpa7sGbRGo7-yKWU2rSDhBM3i3XnQuoa2fBlm4jyjdDFl4m0FoCftBv5Jj1gFKfeRspBIaYbFEd-Qatm6WII1N02R08D45Rcekfd~ET2BMZqsS9SLmqhiZUCCOfcDkFTZ-X5qEf59V-kOBXw2tDv643Xvnl70fiuob50MvdEJ7U8hNBWpkPpJV10OWnv8eX9uq2Pmb~tPJ07G6AxaKbSgJFl4rRQwOs6HcYuoTTOivikq1kr64ToNmXP6I5VPOsuKQrnOtUGzMkzfqkOnn-uI5uBe4vKS~REhmKAzHDEVdSFPrps-HyqDRAtfZ3N6--ogikPvIbs3t~m8Wuflg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : "https://s3-alpha-sig.figma.com/img/3c4e/2652/5d5aeaa88ab502b2ca2c74e9b400bcfd?Expires=1703462400&Signature=T3wRC7IOnIpRWpr2FOPvT0YLz1jNTJzta5LjkMri8277ZBKhu97s8i0GYYg-vmxMEhsFwFh22yQLNYyYjcN5tFOTukgFC87AXRcTpoo4ZKfehxfCp5WMzNT6zuHIk7xMVStM2vKM0U1eBWIQ2lcupxmtU9D5TSUZWDYbeg8DH-hYYuOcTqKiKdeLFNkYBKISyYSLV4Rnf~A1Og7jdk0k8jkjmZy~MPpJasr8jFqINIFlb-nndjxuqu8IFoP4hYda7KSoMdqdecDL1VvV-013ZXv07VnUA~twgdJLB5-HYlzvZfc4ykFU5Kl2WAZOUdd7ktKrimpp-lNlm7gt3q7hUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                          }
                          alt={item.contributors}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute left-3 w-10 h-10 rounded-full overflow-hidden mr-3 border border-green-500">
                        <img
                          src={
                            item.contributors === "Jane Smith"
                              ? "https://s3-alpha-sig.figma.com/img/3c4e/2652/5d5aeaa88ab502b2ca2c74e9b400bcfd?Expires=1703462400&Signature=T3wRC7IOnIpRWpr2FOPvT0YLz1jNTJzta5LjkMri8277ZBKhu97s8i0GYYg-vmxMEhsFwFh22yQLNYyYjcN5tFOTukgFC87AXRcTpoo4ZKfehxfCp5WMzNT6zuHIk7xMVStM2vKM0U1eBWIQ2lcupxmtU9D5TSUZWDYbeg8DH-hYYuOcTqKiKdeLFNkYBKISyYSLV4Rnf~A1Og7jdk0k8jkjmZy~MPpJasr8jFqINIFlb-nndjxuqu8IFoP4hYda7KSoMdqdecDL1VvV-013ZXv07VnUA~twgdJLB5-HYlzvZfc4ykFU5Kl2WAZOUdd7ktKrimpp-lNlm7gt3q7hUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : item.contributors === "Alice Brown"
                              ? "https://s3-alpha-sig.figma.com/img/3c4e/2652/5d5aeaa88ab502b2ca2c74e9b400bcfd?Expires=1703462400&Signature=T3wRC7IOnIpRWpr2FOPvT0YLz1jNTJzta5LjkMri8277ZBKhu97s8i0GYYg-vmxMEhsFwFh22yQLNYyYjcN5tFOTukgFC87AXRcTpoo4ZKfehxfCp5WMzNT6zuHIk7xMVStM2vKM0U1eBWIQ2lcupxmtU9D5TSUZWDYbeg8DH-hYYuOcTqKiKdeLFNkYBKISyYSLV4Rnf~A1Og7jdk0k8jkjmZy~MPpJasr8jFqINIFlb-nndjxuqu8IFoP4hYda7KSoMdqdecDL1VvV-013ZXv07VnUA~twgdJLB5-HYlzvZfc4ykFU5Kl2WAZOUdd7ktKrimpp-lNlm7gt3q7hUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : item.contributors === "John Doe"
                              ? "https://s3-alpha-sig.figma.com/img/f0a3/3761/69c4da5e78338d8bb6dc30ecc0564f18?Expires=1703462400&Signature=ElHR9jWWQ7-X5zjB~8li04pP~sNADKRrc0BE4YcGpmj8DJ7JrhRxmU9xSMx0nG-kVf-9HBkuUAqzdCYQ58auAX57JbkdOHCG8MrwVUVseRAz8mkz~D6BDoffM0Oz3DdP-VYtNDnUEjdP84628VaA0GxS5ngOzP-QTyS9rD0yFpQbW~owKsUQ9C5Nd9TohV2QsSZmyVixcKroEVqmH85bMGGim88qL2kfAgIq~I-n0wOlX5jM-sh5coQQoC4nTvJKl5bYW07lwD0Vx7KzAOLGF8~sO2in6qLQygNo8~8uJOP3nZX~jWqRvz3Ozx9bmYB6jG1MecwkBKxBL4XXuZWRng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : item.contributors === "Bob Johnson"
                              ? "https://s3-alpha-sig.figma.com/img/26e1/3deb/4af4eac611c199ddf896e742834c62f6?Expires=1703462400&Signature=OcZdMpa7sGbRGo7-yKWU2rSDhBM3i3XnQuoa2fBlm4jyjdDFl4m0FoCftBv5Jj1gFKfeRspBIaYbFEd-Qatm6WII1N02R08D45Rcekfd~ET2BMZqsS9SLmqhiZUCCOfcDkFTZ-X5qEf59V-kOBXw2tDv643Xvnl70fiuob50MvdEJ7U8hNBWpkPpJV10OWnv8eX9uq2Pmb~tPJ07G6AxaKbSgJFl4rRQwOs6HcYuoTTOivikq1kr64ToNmXP6I5VPOsuKQrnOtUGzMkzfqkOnn-uI5uBe4vKS~REhmKAzHDEVdSFPrps-HyqDRAtfZ3N6--ogikPvIbs3t~m8Wuflg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : "https://s3-alpha-sig.figma.com/img/3c4e/2652/5d5aeaa88ab502b2ca2c74e9b400bcfd?Expires=1703462400&Signature=T3wRC7IOnIpRWpr2FOPvT0YLz1jNTJzta5LjkMri8277ZBKhu97s8i0GYYg-vmxMEhsFwFh22yQLNYyYjcN5tFOTukgFC87AXRcTpoo4ZKfehxfCp5WMzNT6zuHIk7xMVStM2vKM0U1eBWIQ2lcupxmtU9D5TSUZWDYbeg8DH-hYYuOcTqKiKdeLFNkYBKISyYSLV4Rnf~A1Og7jdk0k8jkjmZy~MPpJasr8jFqINIFlb-nndjxuqu8IFoP4hYda7KSoMdqdecDL1VvV-013ZXv07VnUA~twgdJLB5-HYlzvZfc4ykFU5Kl2WAZOUdd7ktKrimpp-lNlm7gt3q7hUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                          }
                          alt={item.contributors}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute left-6 w-10 h-10 rounded-full overflow-hidden mr-3 border border-green-500">
                        <img
                          src={
                            item.contributors === "Jane Smith"
                              ? "https://s3-alpha-sig.figma.com/img/3c4e/2652/5d5aeaa88ab502b2ca2c74e9b400bcfd?Expires=1703462400&Signature=T3wRC7IOnIpRWpr2FOPvT0YLz1jNTJzta5LjkMri8277ZBKhu97s8i0GYYg-vmxMEhsFwFh22yQLNYyYjcN5tFOTukgFC87AXRcTpoo4ZKfehxfCp5WMzNT6zuHIk7xMVStM2vKM0U1eBWIQ2lcupxmtU9D5TSUZWDYbeg8DH-hYYuOcTqKiKdeLFNkYBKISyYSLV4Rnf~A1Og7jdk0k8jkjmZy~MPpJasr8jFqINIFlb-nndjxuqu8IFoP4hYda7KSoMdqdecDL1VvV-013ZXv07VnUA~twgdJLB5-HYlzvZfc4ykFU5Kl2WAZOUdd7ktKrimpp-lNlm7gt3q7hUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : item.contributors === "Alice Brown"
                              ? "https://s3-alpha-sig.figma.com/img/3c4e/2652/5d5aeaa88ab502b2ca2c74e9b400bcfd?Expires=1703462400&Signature=T3wRC7IOnIpRWpr2FOPvT0YLz1jNTJzta5LjkMri8277ZBKhu97s8i0GYYg-vmxMEhsFwFh22yQLNYyYjcN5tFOTukgFC87AXRcTpoo4ZKfehxfCp5WMzNT6zuHIk7xMVStM2vKM0U1eBWIQ2lcupxmtU9D5TSUZWDYbeg8DH-hYYuOcTqKiKdeLFNkYBKISyYSLV4Rnf~A1Og7jdk0k8jkjmZy~MPpJasr8jFqINIFlb-nndjxuqu8IFoP4hYda7KSoMdqdecDL1VvV-013ZXv07VnUA~twgdJLB5-HYlzvZfc4ykFU5Kl2WAZOUdd7ktKrimpp-lNlm7gt3q7hUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : item.contributors === "John Doe"
                              ? "https://s3-alpha-sig.figma.com/img/f0a3/3761/69c4da5e78338d8bb6dc30ecc0564f18?Expires=1703462400&Signature=ElHR9jWWQ7-X5zjB~8li04pP~sNADKRrc0BE4YcGpmj8DJ7JrhRxmU9xSMx0nG-kVf-9HBkuUAqzdCYQ58auAX57JbkdOHCG8MrwVUVseRAz8mkz~D6BDoffM0Oz3DdP-VYtNDnUEjdP84628VaA0GxS5ngOzP-QTyS9rD0yFpQbW~owKsUQ9C5Nd9TohV2QsSZmyVixcKroEVqmH85bMGGim88qL2kfAgIq~I-n0wOlX5jM-sh5coQQoC4nTvJKl5bYW07lwD0Vx7KzAOLGF8~sO2in6qLQygNo8~8uJOP3nZX~jWqRvz3Ozx9bmYB6jG1MecwkBKxBL4XXuZWRng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : item.contributors === "Bob Johnson"
                              ? "https://s3-alpha-sig.figma.com/img/26e1/3deb/4af4eac611c199ddf896e742834c62f6?Expires=1703462400&Signature=OcZdMpa7sGbRGo7-yKWU2rSDhBM3i3XnQuoa2fBlm4jyjdDFl4m0FoCftBv5Jj1gFKfeRspBIaYbFEd-Qatm6WII1N02R08D45Rcekfd~ET2BMZqsS9SLmqhiZUCCOfcDkFTZ-X5qEf59V-kOBXw2tDv643Xvnl70fiuob50MvdEJ7U8hNBWpkPpJV10OWnv8eX9uq2Pmb~tPJ07G6AxaKbSgJFl4rRQwOs6HcYuoTTOivikq1kr64ToNmXP6I5VPOsuKQrnOtUGzMkzfqkOnn-uI5uBe4vKS~REhmKAzHDEVdSFPrps-HyqDRAtfZ3N6--ogikPvIbs3t~m8Wuflg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              : "https://s3-alpha-sig.figma.com/img/3c4e/2652/5d5aeaa88ab502b2ca2c74e9b400bcfd?Expires=1703462400&Signature=T3wRC7IOnIpRWpr2FOPvT0YLz1jNTJzta5LjkMri8277ZBKhu97s8i0GYYg-vmxMEhsFwFh22yQLNYyYjcN5tFOTukgFC87AXRcTpoo4ZKfehxfCp5WMzNT6zuHIk7xMVStM2vKM0U1eBWIQ2lcupxmtU9D5TSUZWDYbeg8DH-hYYuOcTqKiKdeLFNkYBKISyYSLV4Rnf~A1Og7jdk0k8jkjmZy~MPpJasr8jFqINIFlb-nndjxuqu8IFoP4hYda7KSoMdqdecDL1VvV-013ZXv07VnUA~twgdJLB5-HYlzvZfc4ykFU5Kl2WAZOUdd7ktKrimpp-lNlm7gt3q7hUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                          }
                          alt={item.contributors}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </>,
                  <span
                    className={`p-3 rounded-3xl ${
                      item.projectType === "New Build"
                        ? "bg-blue-200"
                        : item.projectType === "Reconstruction"
                        ? "bg-yellow-200"
                        : item.projectType === "Residential"
                        ? "bg-red-200"
                        : item.projectType === "Commercial"
                        ? "bg-green-200"
                        : "bg-gray-200"
                    }`}
                  >
                    {item.projectType}
                  </span>,
                  <>
                    <FontAwesomeIcon
                      icon={faTableColumns}
                      className="text-icon px-1"
                    />
                    {item.dueDate}
                  </>,
                ].map((cell, index) => (
                  <td
                    key={index}
                    className="px-4 py-4 text-sm whitespace-nowrap"
                  >
                    {cell}
                  </td>
                ))}

                <td className="px-4 py-4 text-sm whitespace-nowrap flex gap-4">
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    size="sm"
                    className="bg-white rounded-full py-4 px-5 text-gray-400 text-lg flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      setShowActions({
                        ...showActions,
                        [item.id]: !showActions[item.id],
                      });
                    }}
                  />
                  {showActions[item.id] && (
                    <>
                      <button
                        className=" text-blue-500 text-xl"
                        onClick={() => handleEdit(item.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} size="sm" />
                      </button>
                      <button
                        className="text-red-500 text-xl"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FontAwesomeIcon icon={faTimes} size="sm" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/*  Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FormGrid
          onClose={() => setIsModalOpen(false)}
          onSave={() => setIsModalOpen(false)}
          dataEdit={selectedProject}
        />
      </Modal>
    </div>
  );
};

export default Grid;
