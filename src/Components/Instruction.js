import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Instruction() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const instruction = (
    <FontAwesomeIcon
      icon={faCircleInfo}
      size="xl"
      style={{ color: "#96989c" }}
    />
  );
  return (
    <div>
      <button type="button" onClick={openModal} className="fixed top-4 right-6">
        {instruction}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    一份食用说明
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 leading-loose">                      
                        欢迎使用快速做饭手册！<br/>
                        做这个手册的初衷是帮助没有时间做饭，正在攒钱，或是家中食材有限的大家也能吃到热乎的饭。<br/>
                        菜谱由作者四处搜罗而来，或许有些漏标了出处，如果您是菜谱作者，欢迎联系本人进行认领。<br/>
                        bug反馈/菜谱投稿/菜谱认领：xiaan706@gmail.com <br/>
                        &#127833; 祝好胃口~                  
                    </p>
                  </div>

                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Instruction;
