import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'



function FanatikaScreen({ history }) {
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
                  fontWeight: "regular",
                  fontSize: "25px",
                  position: "absolute",
                  left: 250,
                  top: 200,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "55px",
                    color: "#FA8C16",
                  }}
                >
                  Fanatika Nedir?
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "45px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  <br />
                  Taraftarında Futbolun İçinde
                  <br />
                  Olduğu Hem Haber Takip Ederken
                  <br />
                  Hem Oyun Oynadığı Futbol Sitesidir
                </p>
                <p
                  style={{
                    fontWeight: "regular",
                    fontSize: "36px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  Quiz için 15 Soru
                  <br />
                  8 Tanesi Genel Futbol Hakkında 
                  <br/>
                  7 Tanesi Senin Takımın Hakkında Olacak
                </p>

              </h2>


              <img 
                        style={{position: "absolute",
                        right: 100,
                        top: 200,
                        width: "900px",
                        height: "700px",}}
                        
                        src="./logo.png" class="img-thumbnail" alt="..."></img>
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
        </div>
    )
}

export default FanatikaScreen