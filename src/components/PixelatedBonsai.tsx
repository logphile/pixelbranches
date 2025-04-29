'use client'

import { useEffect, useRef } from 'react'
import Phaser from 'phaser'

export default function PixelatedBonsai() {
  const gameRef = useRef<HTMLDivElement>(null)
  const phaserGameRef = useRef<Phaser.Game | null>(null)

  useEffect(() => {
    if (gameRef.current && !phaserGameRef.current) {
      class BonsaiScene extends Phaser.Scene {
        bonsai!: Phaser.GameObjects.Sprite

        preload() {
          // Load pixel art bonsai sprite sheet or image here
          // For demo, we will create a simple rectangle with sway animation
          this.load.spritesheet('bonsai', '/bonsai-sprite.png', { frameWidth: 32, frameHeight: 32 })
        }

        create() {
          this.bonsai = this.add.sprite(100, 100, 'bonsai')

          this.anims.create({
            key: 'sway',
            frames: this.anims.generateFrameNumbers('bonsai', { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1,
            yoyo: true,
          })

          this.bonsai.play('sway')
        }
      }

      phaserGameRef.current = new Phaser.Game({
        type: Phaser.AUTO,
        width: 140,
        height: 160,
        parent: gameRef.current,
        scene: BonsaiScene,
        backgroundColor: '#00000000',
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
