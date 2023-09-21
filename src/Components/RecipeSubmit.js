import React, { Fragment, useState } from "react";
import Card from "./Card";
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import SubmitForm from "./SubmitForm";


function RecipeButton() {
  const [showCard, setShowCard] = useState(false);
  const create = <FontAwesomeIcon icon={faKitchenSet} style={{color: "#4a4a4a",}} size="lg"/>;

  function showRecipeCard() {
    setShowCard(true);
  }
  function cancelRecipeCard() {
    setShowCard(false);
  }

  return (
    <>
      <button
        onClick={showRecipeCard}
        type="button"
        className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
      >
        {create} 发布菜谱

      </button>

      <Transition appear show={showCard} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={cancelRecipeCard}>
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
                <Dialog.Panel className='w-full max-w-md p-6 text-left align-middle'>
                  <SubmitForm
                      cancelCard={cancelRecipeCard}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default RecipeButton;
