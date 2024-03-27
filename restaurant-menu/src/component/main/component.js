import Img1 from './coffee.jpg'
export default function ComponentFunction() {
  let CardFunction = [
    {
      id: 1, title: "Caffe Latte", price: "$2.95",
      image: (
        <img src={Img1} className="img" />
      )
    }
 


  ]

  let CardFunctionArray = CardFunction.map((Content) => {
    return (
      <CardContent key={Content.id} title={Content.title} price={Content.price} >
        {Content.image}
      </CardContent>
    )
  })
  return (
    <section >
      <div className="main_section_div" >
        <div className="parent_card ">     {CardFunctionArray}</div>
      </div>
    </section>
  )
}
function CardContent({ title, children, price }) {
  return (
    <>

      <div className="first_div_in_card" >

        <div className="parent_card_detalis">

          <div className="rtl">  {children}</div>
          <div className="discreption_div">
            <div className="first_details">

              <div className="title_text">
                {title}
              </div>
              <div className="border_between">
                <div className="border_1"></div>
              </div>
              <div className="last_text">
                White Chocolate Mocha
              </div>
            </div>

            <div className="price_and_border">
              <div className="price">{price}</div>
              <div className="border_between2">
                <div className="border_2"></div>
              </div>
            </div>
          </div>

        </div>

      </div>




    </>
  )
}