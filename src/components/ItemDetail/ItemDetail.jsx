import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail =({id,category,title,description,price,img,stock}) => {
    return(
    <div className="card shadow-lg" style={{ width: 1170, margin: "30px auto" }}>
        <h1 className="text-uppercase p-2">
            {title} ${price}
        </h1>
        <picture>
            <img className="shadow p-3 rounded-2" src={img} alt={description}/>
        </picture>
        <section className="p-3">
            <p>{description}</p>
        </section>
        <footer className=" card-footer">
        <ItemCount initial={1} stockDisponible={stock} onAdd={(counter) => console.log('cantidad agregada',counter)}/>
        </footer>
    </div>
    )   
} 