import Image from "next/image";
export default function Footer() { 
    return (
        <section className="Filter">
            <div className="conainer">
                <h2>Our team.</h2>
                <div className="Wrap">
                    <h3>Filter By</h3>
                    <div className="relative">
                        <button className="flex"></button>
                        <ul>
                            <li>{Data.list}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}