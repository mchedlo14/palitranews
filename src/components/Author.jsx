const Author = ({id,user,type}) => {

    const author = user.filter(e => {
        return e.id === id
    })

    return type === "detailed" ? (
        <>{
            user &&
            author.map((e, i) => {
                return (
                    <div className='authorWrapper' key={i}>
                        <p className="author">{e.name}</p>
                        <p className="mail">{e.email}</p>   
                    </div>
                    )
                })
        }</>
    ) : (
        <>
            {
                user &&
                    author.map((e, i) => {
                        return (
                            <div className='authorWrapper' key={i}>
                                <p className='author'>{e.name}</p>
                            </div>
                    )
                })
            }
        </>
        )
}

export default Author