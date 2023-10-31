

function Footer() {
    const foot= "copywright";
    const today=new Date();
  return (
    <div>
        {foot};{today.getFullYear()}
    </div>
  )
}

export default Footer