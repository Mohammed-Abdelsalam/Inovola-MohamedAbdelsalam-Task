import React, { useState } from "react";

// components
import Card from "../../components/Card";
import StateBox from "../../components/StateBox";
import Topbar from "../global/Topbar";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowTrendDown,
  faArrowTrendUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// Mock data array
const mockData = [
  {
    id: 1,
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5ade/8a06/33af8e69fc1297a8ec3ae6724d00fd17?Expires=1703462400&Signature=AcZm7ZbfutoVijNg0GeAzQ~0MJwb7mkI3N2Bu9-trcH8qt3CKYMn~iEiJqCtffNHNsF9-6GoAM2Ni9DGllTjlv-3baXQyt2cvKymieCcwgsYRye16TlKFYBLYtavG4OMEnd0pKbf4shbAneiKgvqMR23ALYw88XhYRazm8e2AufdKjpoSHdDugQNPgCRie~JS9VBCDiqe0XPYLq7849e8vTrT845XOV~WcR82GyKwBJTGH0OEDyLNRTf0WM6mJcTRnR8DTklJnr9~51mnC0Fxpmpf89pf7bv9G26Mrg1EL2jMuYia5DKCf28hzJZL10wDsqN31oLLY2KPM2Xh8Ki0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Boston family home",
    description:
      "A beautiful townhouse in the heart of Miami’s down town district. With 3 bedrooms and a heated pool.",
    btn: "View listing details",
  },
  {
    id: 2,
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/17d2/a6c9/98b04d0e61c197e21884bfcf6189fc9e?Expires=1703462400&Signature=L22flrgX3hCQDzAqG193mGmhAa9CmtxdV-IzyhsD6xXRmVjb39Gg0taqDqhPADF~G0HHeKGMV-SboPJf4-61UQ8Fkkrbjaim27C9pkgJNWg1u-3UPjBsETQktNDgrucCR1yFwexBUdoB4nsSssVH9B5bdrdREnevkJxiREMGoXuiptThmVYJQt256S97Akg0S9kO1oBBnxnNyU2jy1X~rgmWk-GusnYq9nFHD9wajZuerJsuwJuvhjjf96IiOOeQBrNnfa-tpq~fIcYNt5MHCUYCWC~KgwF5bbibcKa6tZl1AhN-p4jqD4TlEd2bw0fBW3AJbD6LNsc-z5jX5MpiQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Miami beach house",
    description:
      "A beautiful townhouse in the heart of Miami’s down town district. With 3 bedrooms and a heated pool.",
    btn: "View listing details",
  },
  {
    id: 3,
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/3060/e067/c16452abbcc41cc5395ad8055c14b852?Expires=1703462400&Signature=YQ9HCGpuhBrTapUixjV3fEM9t1UNsNpliKEuh0CnIZ2BBC-qroKrM40t7u6WtwlbLT9IFR1YhBGNCus6FocwyNIjM-j9dZmnR4mJFPdCQH60AUYeB2eLJpOT87g8LmZKuh2Xuq9eQg38BsUcj5vWHhLPDfZtGB157vU-kFtQK47pwsaE6OMQ32IVFv7JyMd1LTsoAGiC4S0nccMB6~-uMZciDqzQLgq9svxjzoILPnFe5u-9qcffRVdkxO5HOQ2ggVqufQ7ZB~~B~KX6w3TbzwaXJ8J7ukyvyIvbw9d~DBtyqjyYkRe~HjzqF4MNlvMjUAvmWNEop1XDKu0ctL0-ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "New York Townhouse",
    description:
      "A beautiful townhouse in the heart of Miami’s down town district. With 3 bedrooms and a heated pool.",
    btn: "View listing details",
  },
  {
    id: 4,
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/018b/4918/680ab14a18e6c4170fc4576cb1b4ce8f?Expires=1703462400&Signature=M~mGrEM4eNk3nuzn6kDe8Oe1lyNEtsJLYmEBtJ9l4Uuy3ZAGKO6lp5QpkwG1z66AHHNiEndv8YIc7E2Gqb95KZyYiHf6UJomLcONO7bjbPbDNOCqGHI~JzpjkLGzaFn9bdDMkAKFaH5cejxPNma3rqg0Sk8PNlBZOA18InysD3l7L-IxymLedY-vMyd9N~V5fwrYhLyBafsAtpbL5B-BrrJphpw2WvOhIfgM43ml0TbYeDx3eMPAIV5c8s3t1WI1vnEFx~MDIzsHxPPpRbsEEewNlo8AVQDnS9MdtgbVU-7xcLGBEnvBRuQFOVM4iTy3Ym4BUCTuP1X~PTRu98r1KQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Beachfront Mansion Miami",
    description:
      "A beautiful townhouse in the heart of Miami’s down town district. With 3 bedrooms and a heated pool.",
    btn: "View listing details",
  },
  {
    id: 5,
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/472b/a53f/f9b934a379d3ff7f161747befe4d3689?Expires=1703462400&Signature=L3iCvjT58eWw1tYCyl4tql31KjZzZeUGHlCjLYtsQXRe2FnYI-R2J5tou7lfAW0C9xnPIcPbSJfBBQYy60CtYUoYKfRS1rPm5vgyD64M4-pL6Jx4IVopRUtQlslLXjPpkrV~~q0vz-e97b~VMDToKYlto1~t702uq3zf8iaCngLMQH6jW9PQMcNYMOuVNlFdsHLjz7RnXAHWORANbc07NKjBrKXrEvCxbaGvk1zcVkuZVw-FBfEsE3OHV7H~nnc9Kd0tx26gwYbaI07HHWQ~3yrAIuHU04TYvpVbVql6ZjzHlCqoUHiRAvkzDDg0eKxIn55YaU8kFwwSjAF4qTqXJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Hamptons Villa",
    description:
      "A beautiful townhouse in the heart of Miami’s down town district. With 3 bedrooms and a heated pool.",
    btn: "View listing details",
  },
  {
    id: 6,
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/02fb/2790/e5728e588d8aba4a02f99d8d234cdb01?Expires=1703462400&Signature=PEl4VUUTGDVmxZjrwzEIqzObsOLbJL1O169LeBp~bKT~bi3aDWAEXvHVJe72aaM~~9nAZZrkLkXIjETH41lVPC746hm5ftNkanx153yUc76MQxG7eYgPUIhf-~hSt3yvC8UeH24juulaz3nE2Fy7I2uCqj7UNQCO-pjdhashWxHiodJXAZogdwIwX-MPysEfpm3wyngSpayw4Gaq4zP6TyWmViBnrIjWIF85UPHjD4ajtktM8S4Eg1ghNY3HgdvlpmYjw6wzdWmn8cA-WU2hzsKeSBln~UxSJRfxs5di1LQmlzhflb9bC21nAVsHBYnHyFWnmfd7FJKAJkIoOhYvpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "San Fransisco Condo",
    description:
      "A beautiful townhouse in the heart of Miami’s down town district. With 3 bedrooms and a heated pool.",
    btn: "View listing details",
  },
  // Add more mock data items as needed
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the mock data based on the search query
  const filteredData = mockData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Topbar title={"Your Dashboard"} />
      <div className="flex gap-4 flex-col lg:flex-row lg:gap-3">
        <StateBox
          icon={faArrowTrendUp}
          color={"#44C13C"}
          title={"Todays sales"}
          increase={2.456}
        />
        <StateBox
          icon={faArrowRightLong}
          color={"#4040F2"}
          title={"New Products"}
          increase={221}
        />
        <StateBox
          icon={faArrowTrendDown}
          color={"#FF513A"}
          title={"Inventory"}
          increase={1.425}
        />
      </div>
      <div className="mx-auto p-4">
        <div className="Topbar flex mx-auto justify-between items-center mb-5 flex-col md:flex-row">
          <h2 className="text-3xl font-bold mb-4 text-title">Your Favorites</h2>
          <div className="search relative">
            <input
              type="text"
              placeholder="Try'Miami beach house'"
              className="border border-gray-300 mb-3 px-8 pl-5 py-3 rounded-3xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="sm"
              className="absolute right-4 top-4 text-btnText"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center">
          {filteredData.map((item) => (
            <Card
              key={item.id}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              btn={item.btn}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
