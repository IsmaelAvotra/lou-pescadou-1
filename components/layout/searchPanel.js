import { motion, AnimatePresence } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { openSearchPanel } from "@/App/Features/searchPanel/searchPanelSlice";
import { switchScreen } from "@/App/Features/manu/menuSlice";

function searchPanel() {
  const opened = useSelector((state) => state.searchPanel.opened);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openSearchPanel(openSearchPanel(false)));
    dispatch(switchScreen({ screen: "home" }));
  };

  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="searchPanel"
          onClick={() => handleClose()}
          className="w-screen z-40 h-screen flex justify-center items-start fixed backdrop-blur-md bg-[#0000003b] fixed top-0"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="w-full md:w-2/6 flex justify-center items-start z-50 h-44 sm:h-44 pb-10 backdrop-blur-3xl bg-[#1e293b] md:rounded-2xl md:mt-44"
          >
            <div className="flex justify-center items-center w-full">
              <BiSearch className="absolute right-3 text-white" size={25} />
              <input
                type="text"
                placeholder="Search"
                className="w-full relative bg-transparent border-[1px] border-gray-500 rounded-b-2xl md:rounded-2xl py-3 md:py-2 px-3 text-white outline-none"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default searchPanel;
