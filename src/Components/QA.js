import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function QA() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const instruction = (
    <FontAwesomeIcon
      icon={faCircleQuestion}
      size="xl"
      style={{ color: "#96989c" }}
    />
  );
  return (
    <div>
      <button type="button" onClick={openModal} className="fixed top-4 left-6">
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
                    一些小贴士
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 leading-loose">                       
                        - 煮挂面时，平均一个人挂面用量的横截面大约是一元硬币大小。可依照自己饭量增减。<br/>
                        - 本网站提供的调料用量均可按照个人口味调整。<br/>
                        - 煎鸡蛋时，在锅中下入鸡蛋后先静置一会，待鸡蛋底面煎定型再翻面，不容易破裂。<br/>
                        - 炒饭用隔夜的冷饭，含水量少，成功率高。
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

export default QA;
