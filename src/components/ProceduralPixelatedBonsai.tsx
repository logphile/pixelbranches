'use client'

import { useEffect, useRef } from 'react'
import Phaser from 'phaser'

export default function ProceduralPixelatedBonsai() {
  const gameRef = useRef<HTMLDivElement>(null)
  const phaserGameRef = useRef<Phaser.Game | null>(null)

  useEffect(() => {
    if (gameRef.current && !phaserGameRef.current) {
      class BonsaiScene extends Phaser.Scene {
        graphics!: Phaser.GameObjects.Graphics
        greenBalls!: Phaser.GameObjects.Graphics[]

        create() {
          this.graphics = this.add.graphics({ x: 105, y: 180 })

          // Draw bonsai pot
          this.graphics.fillStyle(0x8b5e3c, 1)
          this.graphics.fillRoundedRect(-60, 0, 120, 45, 12)

          // Draw bonsai trunk
          this.graphics.fillStyle(0x5a3d1b, 1)
          this.graphics.fillRect(-15, -105, 30, 105)

          // Draw branches (simple rectangles)
          this.graphics.fillRect(-45, -90, 30, 15)
          this.graphics.fillRect(15, -75, 30, 15)

          // Draw leaves as pixelated circles (stationary)
          this.graphics.fillStyle(0x4caf50, 1)
          this.graphics.fillCircle(-15, -135, 30)
          this.graphics.fillCircle(22, -120, 30)

          // Create green balls on top that will sway
          this.greenBalls = []
          const greenBallPositions = [
            { x: -5, y: -160 },
            { x: 10, y: -170 },
            { x: 25, y: -160 },
          ]
          greenBallPositions.forEach(pos => {
            const ball = this.add.graphics({ x: pos.x, y: pos.y })
            ball.fillStyle(0x4caf50, 1)
            ball.fillCircle(0, 0, 10)
            this.greenBalls.push(ball)
          })

          // Create sway animation tween for green balls only
          this.greenBalls.forEach((ball, index) => {
            this.tweens.add({
              targets: ball,
              angle: { from: -10, to: 10 },
              duration: 2000 + index * 300,
              yoyo: true,
              repeat: -1,
              ease: 'Sine.easeInOut',
            })
          })
        }
      }

      phaserGameRef.current = new Phaser.Game({
        type: Phaser.AUTO,
        width: 210,
        height: 240,
        parent: gameRef.current,
        scene: BonsaiScene,
        backgroundColor: '#5C7285', // same as homepage background
        pixelArt: true,
        roundPixels: true,
      })
    }

    return () => {
      if (phaserGameRef.current) {
        phaserGameRef.current.destroy(true)
        phaserGameRef.current = null
      }
    }
  }, [])

  return <div ref={gameRef} />
}
