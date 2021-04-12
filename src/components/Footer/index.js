import "./style.scss"

function Footer({ count, offset, setOffset }) {
  
  const cName = "footer"

  function getOffsetText() {
    const start   = offset || 1
    const end     = offset + 6 < count ? offset + 6 : count
    return `${start}-${end}`
  }

  function next() {

    if (offset + 6 >= count) return;
    setOffset(offset + 6)
  }

  function previous() {

    if (offset - 6 < 0) return;
    setOffset(offset - 6)
  }

  return (
    <div className={cName}>
      <p className={`${cName}__current-offset`}>
        {getOffsetText()}
        <span className={`${cName}__offset`}>out of {count}</span>
      </p>
      <div className={`${cName}__actions`}>
        <div className={`${cName}__action`} onClick={previous}>
          PREVIOUS
        </div>
        <div className={`${cName}__action`} onClick={next}>
          NEXT
        </div>
      </div>
    </div>
  )
}

export default Footer
