import { Dialog } from '@headlessui/react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const submitRecipeCard = (name, text, time, unit) => {
    const recipeJson = JSON.stringify({
        "id": 0,
        "Name": name,
        "Text": text,
        "Time": time + " " + unit,
        "ImgURL": "",
    })
    const vvEmail = "xiaan706@gmail.com"
    const url = "mailto:" + vvEmail + "?subject=Recipe Submission&body=" + recipeJson
    window.open(url)
}

function Card(props) {
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [time, setTime] = useState("")
  const [unit, setUnit] = useState("")
  return (
    <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="max-w-md mx-auto">
        <div className="p-4 sm:p-6">
            <button
                onClick={props.cancelCard}
                className="absolute top-5 right-6 mt-4 mr-4 text-gray-400 hover:text-gray-500"
            >
                <FontAwesomeIcon icon={faXmark}/>
            </button>
          <Dialog.Title className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              提供您的菜谱
          </Dialog.Title>
          <p className="text-[#7C7C80] mt-6 whitespace-pre-line">
              提供您的菜谱内容，使用邮件功能发送。我们会在审核后发布到网站上。
          </p>
          <p className="text-[#7C7C80] mt-6">
              PS：为统一风格及难度，您的投稿内容在被发布前可能会被修改，敬请谅解。
          </p>
          <p className="text-[#7C7C80] text-md mt-6 whitespace-pre-line">
            <input onChange={(e) => setName(e.target.value)} type="text" className="p-2 border-2 rounded-md bg-slate-50 w-full" placeholder="菜谱名"/>
            <textarea onChange={(e) => setText(e.target.value)} className="p-2 mt-2 border-2 rounded-md bg-slate-50 w-full h-64" placeholder="步骤"/>
            <input onChange={(e) => setTime(e.target.value)} type="number" className="p-2 border-2 rounded-md bg-slate-50 w-2/3" placeholder="预计用时"/>
            <input onChange={(e) => setUnit(e.target.value)} type="text" className="p-2 border-2 rounded-md bg-slate-50 w-1/3" placeholder="时间单位" />
          </p>
          <button
            onClick={() => submitRecipeCard(name, text, time, unit)}
            className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-zinc-100 hover:text-[#000000dd] active:bg-zinc-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
