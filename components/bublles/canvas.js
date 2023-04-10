import { useRef, useEffect } from "react";

function canvas() {
  const CanvasRef = useRef();

  useEffect(() => {
    let canvas = CanvasRef.current;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const ctx = canvas.getContext("2d");

    let mouse = {
      x: undefined,
      y: undefined,
    };

    class Bubble {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = "";
        this.destroy = function () {};
      }

      drawBubble() {
        // Draw the bubble
        ctx.beginPath();
        ctx.shadowColor = this.color == "" ? "#eee" : this.color;
        ctx.shadowBlur = 8;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color == "" ? "#9ccbe413" : this.color;
        ctx.fill();
        ctx.strokeStyle = this.color == "" ? "#e3e3e3" : this.color;
        ctx.stroke();

        // Draw a highlight
        ctx.beginPath();
        ctx.shadowColor = this.color == "" ? "#fff" : this.color;
        ctx.shadowBlur = 20;
        ctx.arc(
          this.x - this.size / 3,
          this.y - this.size / 3,
          this.size / 5,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = this.color == "" ? "#ffffff77" : this.color;
        ctx.fill();
      }

      updateDimentions() {
        if (this.destroyed) return;
        this.x -= this.dx;
        this.y -= this.dy;
        this.drawBubble();

        if (
          Math.abs(mouse.x - this.x) < this.size + 30 &&
          Math.abs(mouse.y - this.y) < this.size + 30
        ) {
          this.destroyBubble();
        }
      }

      destroyBubble() {
        this.destroyed = true;

        // Remove the current bubble from the bubbles array
        const index = bubbles.indexOf(this);
        if (index !== -1) {
          bubbles.splice(index, 1);
        }

        const drowSmallBuuble = (params) => {
          ctx.beginPath();
          ctx.shadowColor = params.color;
          ctx.shadowBlur = 8;
          ctx.arc(params.x, params.y, params.size, 0, Math.PI * 2);
          ctx.fillStyle = "transparent";
          ctx.fill();
          ctx.stroke();
        };
        let smallBubbles = [];

        for (let i = 1; i < 15; i++) {
          let params = {
            x: this.x,
            y: this.y,
            dx: Math.random() - Math.random(),
            dy: Math.random() - Math.random(),
            color: "#eee",
            size: this.size / 2,
          };
          smallBubbles.push(params);
        }

        const smallAnimation = () => {
          const smallAnimationReq = requestAnimationFrame(smallAnimation);
          smallBubbles.forEach((bub) => {
            bub.x += bub.dx;
            bub.y += bub.dy;
            bub.size -= bub.size / 10;
            if (bub.size <= 0) {
              cancelAnimationFrame(smallAnimationReq);
            }
            drowSmallBuuble(bub);
          });
        };
        smallAnimation();
      }

      isOutOfScreen() {
        const index = bubbles.indexOf(this);
        if (
          this.x < -this.size ||
          this.x > canvas.width + this.size ||
          this.y < -this.size ||
          this.y > canvas.height + this.size
        ) {
          bubbles.splice(index, 1);
        }
      }
    }

    // init bubble creation
    let bubbles = [];
    let initBubbles = 10;
    let phoneMidea = matchMedia("(max-width: 767px)");

    if (phoneMidea.matches) {
      initBubbles = 0;
    }
    createBubbles(initBubbles);

    // animation function
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      bubbles.forEach((b) => {
        b.updateDimentions();
        b.isOutOfScreen();
      });
    }
    animate();

    // init bubbles function
    function createBubbles(num) {
      for (let i = 0; i < num; i++) {
        let x = innerWidth,
          y = innerHeight,
          dx = Math.random(),
          dy = Math.random(),
          size = Math.random() * 20;
        bubbles.push(new Bubble(x, y, dx, dy, size));
      }
    }

    // add bubbles evrey 3s
    setInterval(() => {
      if (phoneMidea.matches) {
        createBubbles(3);
      } else {
        createBubbles(10);
      }
    }, 5000);
  }, []);

  return (
    <canvas className="w-full h-full fixed top-0" ref={CanvasRef}></canvas>
  );
}

export default canvas;
