interface IProps {
  children:JSX.Element | string
  onClick: ()=>void
}

const CCustomModalHeader = ({children,onClick}: IProps) => {
  return (
    <div className='modal-header'>
    <h5 className='modal-title'>{children}</h5>
    <button type='button' className='btn btn-close' onClick={onClick} aria-label='Close'></button>
  </div>
  )
}

export default CCustomModalHeader