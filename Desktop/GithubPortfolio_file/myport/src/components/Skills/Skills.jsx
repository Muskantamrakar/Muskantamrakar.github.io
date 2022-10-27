import React from "react";
import style from "./skills.module.css";
// import {AiFillHtml5} from "react-icons/ai"
function Skills() {
  return (
    <div className={style.skillsbody}>
      <div>
        <h1>Skills & Interests</h1>
      </div>
      <div className={style.allicons}>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="" />
          {/* <div style={{ fontWeight: "300" }}></div> */}
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="css" />
          {/* <div style={{ fontWeight: "300" }}>CSS</div> */}
        </div>
        <div>
          <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="js" />
          {/* <div style={{ fontWeight: "300" }}>Javascript</div> */}
        </div>
        <div>
          <img src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png" alt="html" />
          {/* <div style={{ fontWeight: "300" }}>React</div> */}
        </div>
        <div>
          <img src="https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png" alt="html" />
          {/* <div style={{ fontWeight: "300" }}>Redux</div> */}
        </div>
        {/* <div> */}
          {/* <img src="/skills/algorithm.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>Algorithms</div>
        </div>
        <div>
          <img src="/skills/bootstrap.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>Bootstrap</div> */}
        {/* </div> */}
        <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAe1BMVEX///8AAAAQEBB9fX3r6+u6urqnp6eNjY2AgICRkZEpKSmzs7Pb29stLS3z8/Pw8PDh4eH5+fllZWWdnZ3Q0NBfX1/Jycne3t5qamozMzOHh4e2traqqqpBQUFSUlK/v786OjpycnIiIiKfn59MTEwaGhoVFRVNTU1FRUX9/bFcAAAJ60lEQVR4nO1d63qiMBBtKmqtrJdqqba2im67ff8nXAFDbpNAIDgker7+KUJMjmEymVseHu644yawjOJ1csY6jpbYfekxov1ksyUCtpvJPsLuV+8Q7TZEi83uTliJxeRZz1SB58kCu5e9wO5PFVMF/uywe4qNaFCPqQJPt/w6RgZBBWNzq3TNUluqMqQz7H5jYNWEqgwr7J5fHfF3U64I+Y6xe39dPDWnKsMTdv+viOjYjitCjjcj6IdtqcowxB7FdTB2wRUhY+xxXAOvbrgi5BV7JN3j0xVXhHxij6VrbKs5qI8t9mi6hVOuAmfr4JYrQg7YI+oOX665IuQLe0xdwcocUxcD7FF1g2kXXBEyxR5XF3jrhitC3rBH1gHkMQ6Ho4H9HjEdDff/pGvYI3MP2ShaGA6ik42pZlxMokS6vMEcVxeQB0jW5Sd1dXomnORPEpQhdQdl6Nxn6zr+HV6OK9vLa4+mWyhag6gflQvl9uX9NN0n63Wy/xhN0nLSiSaGkdxaUPrDQpkosoFlQ7bvQ8CROk9WX2QrfaC80yQkF+xfZXSKx9QmCiRSmvvrsLPIWCuDI/s27S3V9tbVT3kCYP/cbgFT2zs46WgPAEws52QFM7UgY0Mrf8MMaDAQ84Mqjs84tWkR3GaG4Rx7h4aWtmkR9KW9u+ovKqCRkZ82LcL+bFf9xcQeHFkrwwrcYittpCfQxGC1ETGwKT8E4wPMVauVHlBKw3gP1X1chkm7RiHNLQRLDbgWHtu2Cvo+/F8Pwajt9nMAavXZQXdRAYqXQ/t2wSBL3/NXQJHlYJEHfwTfhRY4A1w0/AK063toLqRltdrqUEBbHt81LUi+O4lwhCwPvkt46C10Yx+AHI5OGkbDHCLLTdOQ0Jq7aRoJcXcvCxTH63c2AaQ5OPLEnICm/dYdoDXLUZTxDmja7+B4aEQdkuV3/qbiaCfOXAtQ0yM3TSMBUuB/u2vabxUeksKOVkPI9tPKZ4QO6F1xpGelwb2GYNCtm6bVYBPfg3FBD5+b+CCoZb9Vh67MWUEatEBHu5NMQdBn4XeUN2RIcZP6BloVPS9jAA3Jia38F2rYQbuYAHPmPtq3C07ZQ/t2UZFCg3Kw4QEVOCf2akSAg3JgKwUTWfzWSXWO9tZx63BojvehkuCoWk8tuDqZkw5jAs7MaSm14Jfb/2z8CTy1Wu3iwCjV1qE5PQAstNptEDVpin67K3JoyGrhtoLsDRkcdhoL2jTypkJex1UIqWG697ChjWCuLdPpveKQQUtWk5ph+hT+R/c9R4CpuJ/lLjE2lBzx21lBwe15j5PdSJRhPxauvkQnrXJ4bp6hYDFahb4gvUqbfR2TzRqM5GXwfRNNwZJ+X4oLS1mt/xzvDXpXlKX+ViGYxF+WLf91mUTg4EFz8/CxkqcM4ZRp4/PJLw4YwCioKYZVr6RwMBNLHHAh0YEoN52SWoerUCRWBsEIXCiPShCMdrx1qiMFshQWEHStQm7J5Xf02+BqrsLQsUrwhoIX9ZJRAa+UWr5HKcsQvK3Fi7gUhLxB6lS+h377VgHwRkC67vExtAZrIBTFy8N/o58CfltH7Q2zVaGebqYmJV5jGKU4dN/3q4NfEXkT/KzSCqhJXKUIaiWk4A1bdjqkkasgzFgqOJ+MXelaE1e+O1a14OoxWCVwGbgK+MwBTmOy8RzqufI9ac4IvlpffbOflqtwbA0ghFyudLgoVIZoPTKtiTfKlSYGiZjXR80jIZkaNND48+3JuolDLODDUazJchA+6AMWkKXYQBaowQe3edYCSNk1DB4gK3jRzuOjHVl+5xVaYynXRzaQJUcmf/mdN94EyY/AgCG4SiIrhAps9tg1ISswc7sFuNxNg6VldqeqwJTWgq+x3XkM1hxTG3EeVmOsqpYbwjZ+58c5QzKtiJ19m96mVL/jjjvuuMM7xB+r96czxqtpEkZx9o4wP8k5y/9WAQXjucQCKilHyMEy82j0/VzgUXhwebn6fKxnxVoe7e6/LrRB16yz09ft31VVBDeLkBcqf3BxIbW6Y3v/NbHUn/Q1km6pCEuoJKtexont/VcEWDPgAvo2lXSa5X74ZIkmPBGXW5jdyixEgifLdDg7DWfgMgToY/PoAj64KnSyYB/gBdRSx3m+qDqh0vcQPlkKQY/bw5YW8qXynFsBIvk5fjyBkyVG/n/u6MRZvn2kbNJwSXP00i2SxUv3H1kxKJc+lrpT2oVvkCw+StRUUJNOQBbAdoNkcWGP38Ybk1zGc/HqN0gWt8xVbQPjvfCW3h5Z3CbMdst6e2RxdZnMu745RXmlfPBnmX+Q77E1ZM0tBy+QtZymeYrQ9wa5hikXw2e8j4XMFFIrHqkmnex6vZnF8qvL5ZYl6CXC/cdI+CLUYsKsJ+YIa5YsMD7/1HBueDa1GFmCl5Bt1XOyWMWQUk6yXy0LB9Sn+mAeoMxS4Mx+dYEs9fxtgKz0tFoVf6vTiVGRk8X2A9ZkYVbYYp0we9btydKgNVmIQbusD6W5fTIW8J4L/h6RhXbMLWf2o4YWJac+L9PUJ7Kw6kYBtm6FrDwPqU9kYZnlF2oPekfW7yiOojWvQCAFLjUj6yE+gz36uIjzC9l9DsjKNE9G1pbKUq5SAlJCdUOycojjv8A5WUz9Yy5gpGPfuemuFfC4ZL2UTQ/FNq4PbjWk090VWa950MQFA/HmRmRxfe2SEgNYB+g+WnEiNiRL2O5IG+lGZHF9RTq4lXWgTA+JkzPWrPMNyTJtpJuRxapKIKmlbP8vqXpMQvSGLFYuEImstOyAZFRmNpnekMVsHUhkcXUaxFisHpLFZhZSlhTn3BFj/ntIFpNZWCdzM7LELvSQLObhdEmADbioEMFj0UOyWE9dEmADPiyE33NZkPXDPdYhWewanrGUI4uvsmChOthH0TCySgNCNVns58MrBiHWaBjHl/ofrOJaNVmcd7YeWUxUl6sK+z4dWcxdgOjiIRXQkcWKI34zraMeWZygLHZZMWeuEskim8s+LJWfQUFV7UIdWXzA4J9N+rrN7Bb1yOICLMhhMBBDDyWyzvhKxVuuyY4MU5ikgSylRnyWfF+PLOPvo5IlAbd+jT6w20SWYlzOXsZ6ZJnCo6vJwj1BxRAGbyBLOXGvPlnGyVxFFpKdlMHUeS1Z8tSyIMtERhVZ+OUz9CHLRbwyRJb8kAVZ0PcdflWy3tUDL3pReXIEpQ58U5WGkcXvt8UjZjIBn5b/CeWeVP+kfCzucUjXSJ6svXKkWF+OfIon4lELvyvWsxm1qA9ES86O/fSvmTqbDOh9os2pNMaz+JMTJykH2XyJ03RwRv5g8XWDrMkPJiOe+1UVYpFMT6vJ5LRL6qYaLuP9dNcslXOWfdlqtK989m0/Op27hC+t7rhDh/9+G3dkj6wn6AAAAABJRU5ErkJggg==" alt="html" />
          {/* <div style={{ fontWeight: "300" }}>Github</div> */}
        </div>
        <div>
          <img src="data:image/png;base64,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" alt="html" />
          {/* <div style={{ fontWeight: "300" }}>Mongodb</div> */}
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWWXVohNdns_Rh_2jxf6VwpXiGNuuuuDQ_Q&usqp=CAU" alt="html" />
          {/* <div style={{ fontWeight: "300" }}>Express js</div> */}
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="html" />
          {/* <div style={{ fontWeight: "300" }}>Node js</div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
