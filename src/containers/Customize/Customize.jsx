import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Modal from "react-modal"
import Customize from "../../components/Customize/Customize"
import { navigate } from "gatsby"
import { setModAction, advanceStageAction } from "../../redux/actions"
import mods from "../../components/Mods"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const CustomizeContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEvolutionDone, setIsEvolutionDone] = useState(false)
  const dispatch = useDispatch()
  const stage = useSelector(state => state.medoosa.stage)
  const goHome = () => {
    if (isEvolutionDone) {
      navigate("/home")
    }
  }

  const onConfirm = itemIndex => {
    dispatch(
      setModAction({
        modIndex: 0,
        itemIndex,
      })
    )
    dispatch(advanceStageAction())
    setIsModalOpen(true)
    setTimeout(() => {
      setIsEvolutionDone(true)
    }, 3000)
  }

  return (
    <div>
      <Customize items={mods[stage]} onConfirm={onConfirm} />
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={() => {}}
        onRequestClose={goHome}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  )
}

export default CustomizeContainer
