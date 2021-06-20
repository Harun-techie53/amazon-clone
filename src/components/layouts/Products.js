import React from "react";
import StarIcon from '@material-ui/icons/Star';

import "../stylesheets/Product.css";

const Products = () => {
    return (
        <div className="grid-container mt-5">
            <div className="products__card shadow p-3 mb-5 bg-body rounded">
                <img src="../../../images/sneaker.jpg" className="img-fluid" />
                <div className="products__detail">
                    <span className="fw-bold">
                        Nike Sneaker
                    </span>
                    <StarIcon className="mt-3"/>
                    <span className="fw-normal">
                        $120
                    </span>
                </div>
            </div>
            <div className="products__card shadow p-3 mb-5 bg-body rounded">
                <img src="../../../images/watch.jpg" className="img-fluid" />
                <div className="products__detail">
                    <span className="fw-bold">
                        Nike Sneaker
                    </span>
                    <StarIcon className="mt-3"/>
                    <span className="fw-normal">
                        $120
                    </span>
                </div>
            </div>
            <div className="products__card shadow p-3 mb-5 bg-body rounded">
                <img src="../../../images/watch.jpg" className="img-fluid" />
                <div className="products__detail">
                    <span className="fw-bold">
                        Nike Sneaker
                    </span>
                    <StarIcon className="mt-3"/>
                    <span className="fw-normal">
                        $120
                    </span>
                </div>
            </div>
            <div className="products__card shadow p-3 mb-5 bg-body rounded">
                <img src="../../../images/watch.jpg" className="img-fluid" />
                <div className="products__detail">
                    <span className="fw-bold">
                        Nike Sneaker
                    </span>
                    <StarIcon className="mt-3"/>
                    <span className="fw-normal">
                        $120
                    </span>
                </div>
            </div>
            <div className="products__card shadow p-3 mb-5 bg-body rounded">
                <img src="../../../images/watch.jpg" className="img-fluid" />
                <div className="products__detail">
                    <span className="fw-bold">
                        Nike Sneaker
                    </span>
                    <StarIcon className="mt-3"/>
                    <span className="fw-normal">
                        $120
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Products;