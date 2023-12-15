import React, { useEffect, useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faQuestionCircle,
  faCamera,
  faGear,
  faTags,
  faTableColumns,
  faShareNodes,
  faBookmark,
  faFolderClosed,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// Components
import Item from "../../components/Item";

const Sidebar = () => {
  const [show, setShow] = useState(true);
  const [selected, setSelected] = useState("/");
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
  });

  // Render Resize Screen for responsive
  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
      });
      setShow(window.innerWidth <= 768 ? false : true);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  // For render Width in the frist Time
  useEffect(() => {
    if (windowDimensions.width >= 768) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [windowDimensions.width]);

  return (
    <div className="bg-white border md:w-[250px]">
      <div className="flex flex-col h-full py-6 relative">
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center md:block w-full px-2 text-center text-blue-900 font-bold text-2xl md:text-3xl mb-10">
            <div>
              Investly
              <span className="text-indigo-600">.</span>
            </div>
            <button onClick={() => setShow(!show)} className="md:hidden">
              <FontAwesomeIcon icon={show ? faTimes : faBars} size="sm" />
            </button>
          </div>
        </div>
        {show && (
          <div>
            <div className="flex-1">
              <Item
                icon={faFolderClosed}
                title="Dashboard"
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={faTableColumns}
                title="Available Units"
                to="/AvailableUnits"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={faClock}
                title="Invoices"
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={faShareNodes}
                title="Projects"
                to="/projects"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={faCamera}
                title="Social Media"
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={faBookmark}
                title="Integrations"
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={faTags}
                title="Documentation"
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            <div className="text-white text-sm">
              <Item
                icon={faGear}
                title="Settings"
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={faQuestionCircle}
                title="Help Center"
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <div className="admin-details flex items-center border-t border-primary pt-5 md:mb-40 mt-10 mr-2">
                <div className="w-12 h-12 rounded-full overflow-hidden m-3 border border-green-500">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/3c4e/2652/5d5aeaa88ab502b2ca2c74e9b400bcfd?Expires=1703462400&Signature=T3wRC7IOnIpRWpr2FOPvT0YLz1jNTJzta5LjkMri8277ZBKhu97s8i0GYYg-vmxMEhsFwFh22yQLNYyYjcN5tFOTukgFC87AXRcTpoo4ZKfehxfCp5WMzNT6zuHIk7xMVStM2vKM0U1eBWIQ2lcupxmtU9D5TSUZWDYbeg8DH-hYYuOcTqKiKdeLFNkYBKISyYSLV4Rnf~A1Og7jdk0k8jkjmZy~MPpJasr8jFqINIFlb-nndjxuqu8IFoP4hYda7KSoMdqdecDL1VvV-013ZXv07VnUA~twgdJLB5-HYlzvZfc4ykFU5Kl2WAZOUdd7ktKrimpp-lNlm7gt3q7hUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="Admin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <div>
                    <h2 className="text-sm font-medium text-gray-800">
                      Louise Thompson
                    </h2>
                    <p className="text-xs font-normal text-gray-600">
                      Enterprise plan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
