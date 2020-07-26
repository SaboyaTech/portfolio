import Typewriter from 'typewriter-effect/dist/core';

const typewriter = new Typewriter('#typewriter', {
	delay: 75,
	loop: true,
});

typewriter
	.pauseFor(1500)
	.typeString('I am a Full-Stack Developer')
	.pauseFor(1000)
	.deleteChars(20)
	.typeString('C.S. Student')
	.pauseFor(1000)
	.deleteChars(12)
	.typeString('Cyber Secuirty Enthusiast')
	.pauseFor(1000)
	.start();
