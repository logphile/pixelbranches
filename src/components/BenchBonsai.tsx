'use client'

export default function BenchBonsai() {
  return (
    <>
      <div className="bench-bonsai-container">
        <div className="bonsai-tree">
          <div className="bonsai-pot" />
          <div className="bonsai-trunk" />
          <div className="bonsai-branch left" />
          <div className="bonsai-branch right" />
          <div className="bonsai-leaves" />
        </div>
        <div className="bench">
          <div className="bench-seat" />
          <div className="bench-legs left" />
          <div className="bench-legs right" />
          <div className="bench-backrest" />
        </div>
      </div>
      <style jsx>{`
        .bench-bonsai-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        /* Bonsai tree styles */
        .bonsai-tree {
          position: relative;
          width: 140px;
          height: 160px;
        }
        .bonsai-pot {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 40px;
          background: linear-gradient(135deg, #8b5e3c, #5a3d1b);
          border-radius: 0 0 15px 15px;
          box-shadow: inset 0 4px 6px rgba(0,0,0,0.3);
        }
        .bonsai-trunk {
          position: absolute;
          bottom: 40px;
          left: 45%;
          width: 20px;
          height: 70px;
          background: linear-gradient(180deg, #5a3d1b, #3e2a0f);
          border-radius: 10px;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.4);
          transform: rotate(-15deg);
          transform-origin: bottom center;
          z-index: 2;
        }
        .bonsai-branch {
          position: absolute;
          bottom: 90px;
          width: 40px;
          height: 10px;
          background: linear-gradient(90deg, #5a3d1b, #3e2a0f);
          border-radius: 5px;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
          z-index: 3;
        }
        .bonsai-branch.left {
          left: 30%;
          transform: rotate(-30deg);
          transform-origin: right center;
        }
        .bonsai-branch.right {
          left: 55%;
          transform: rotate(20deg);
          transform-origin: left center;
        }
        .bonsai-leaves {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 80px;
          background: radial-gradient(circle at center, #4caf50, #2e7d32);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          box-shadow:
            0 0 10px 2px rgba(46,125,50,0.6),
            inset 0 10px 15px rgba(76,175,80,0.7);
          z-index: 1;
        }
        /* Bench styles */
        .bench {
          position: relative;
          width: 180px;
          height: 100px;
        }
        .bench-seat {
          position: absolute;
          top: 40px;
          left: 0;
          width: 180px;
          height: 20px;
          background: linear-gradient(90deg, #a0522d, #6b3e1a);
          border-radius: 5px;
          box-shadow: inset 0 4px 6px rgba(0,0,0,0.3);
        }
        .bench-legs {
          position: absolute;
          top: 60px;
          width: 20px;
          height: 40px;
          background: linear-gradient(180deg, #6b3e1a, #3e2a0f);
          border-radius: 5px;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.4);
        }
        .bench-legs.left {
          left: 20px;
        }
        .bench-legs.right {
          right: 20px;
        }
        .bench-backrest {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 160px;
          height: 20px;
          background: linear-gradient(90deg, #8b5e3c, #5a3d1b);
          border-radius: 5px;
          box-shadow: inset 0 4px 6px rgba(0,0,0,0.3);
        }
      `}</style>
    </>
  )
}
