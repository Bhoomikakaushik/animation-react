import { useGSAP } from "@gsap/react";
import "./tedx.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Tedx(){

    useGSAP(()=>{
        gsap.from("#heading", {
            y:-10,
            opacity:0,
            scrollTrigger : {
                trigger:"#heading",
                scroller:"body",
                start:"top 70%",
                end:"bottom 30%",
                scrub:2
            }

        })
    })
    
    return(
        <div>
            <img id="image" src="https://stacyennis.com/wp-content/uploads/2017/01/DSC_0605-e1485445626420.jpg"></img>
            <h1 id="heading">hellooo thereeeee !!!!!! </h1>
        </div>
    )
}