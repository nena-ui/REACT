function Card () {
    return(
        <>
       <div className="max-w-[24rem] bg-white border border-gray-200 my-4 mx-auto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPf_062JKWOBQr9rKxfyjLtlwzCn6Wwx_fJ6vQDIAgQ&s=10" alt="straberry" className="w-full h-56 object-cover" />
            <p>2 hours ago</p>
            <h3>Blog title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam, eveniet ipsum libero ad ab? Sapiente ullam hic soluta corrupti.</p>
            <hr />
            <div>
                footer
            </div>

        </div>
       </>
    )
}

export default Card