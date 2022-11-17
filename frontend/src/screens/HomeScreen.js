import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { Link } from 'react-router-dom'





function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state)
    const { error, loading, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {

    }, [dispatch, keyword])

    return (
        <div>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                        <h2
                        style={{
                            position: "absolute",
                            right: 60,
                            color: "grey",
                            top: 500,
                            fontWeight: "bold",
                            fontSize: "35px",
                            fontFamily: "Verdana",
                            textAlign: "center",
                            zIndex: 1,
                        }}
                        >
                        Hem Takımını Destekle, Hem Ödülleri Kap
                        <br /> 
                        Futbolu Takip Ederken, Eğlen
                        </h2>
                        
                        <Link to="/fanatika">
                        <button style={{position: "absolute",
                        right: 450,
                        top: 800,
                        width: "250px",
                        height: "65px",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "15px",
                        backgroundColor: "black",
                        borderColor: "red",}}
                        type="button" class="btn btn-info">Öğrenmeye Başla</button>
                        </Link>
                        
                        
                        

                        <img 
                        style={{position: "absolute",
                        left: 250,
                        top: 250,
                        width: "1000px",
                        height: "700px",}}
                        
                        src="./bacground.png" class="img-thumbnail" alt="..."></img>
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
        </div>
    )
}

export default HomeScreen