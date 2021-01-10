document.querySelector('#reveal').addEventListener('click', Horoscope);



function Horoscope() {
  let month = document.querySelector('#month-select').value;
  let day = Number(document.querySelector('#day-select').value);

  if (month === "December" && day >= 22 || month === "January" && day <= 19) {
    console.log("Capricorn");
    document.querySelector('#horoChar').innerText="Capricorn: Sailor Saturn!";
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609853854/sailorsaturn.png";
    document.querySelector('#result').innerText="To put it simple, Capricorns are powerful… too powerful… so powerful, they might be locked away in isolation, in fear that the might fully channel their powers to annihilate the entire world. I mean, they love their alone time anyways, right? Sailor Saturn is known for her powers of Silence and Destruction. She has the ability to destroy entire planets. Capricorns are renowned for their ambition and reserved nature; they don’t stop until they have succeeded in a goal. Yet, they’re not evil! Neither Capricorns nor Sailor Saturn use their determination and know-how for malicious destruction."
  } else if (month === "January" && day >= 20 || month === "February" && day <= 18) {
    console.log("Aquarius");
    document.querySelector('#horoChar').innerText="Aquarius: Sailor Uranus!"
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609853855/sailoruranus.png";
    document.querySelector('#result').innerText="Aquarius is ruled by the planet Uranus, the planet of rebellion, change, and the unconventional! With themes like that, Aquarians tend to be innovative, eccentric, and forward-thinking! Sailor Uranus easily stands out amongst the guardians for her short hair and the androgynous clothing she wears when dressed as her civilian identity, Haruka. She possess the power for world-shaking, which totally relates to Aquarians’ humanitarian ideals. They want to shake up the system! To reinvent the wheel! To shake the world!"
  } else if (month === "February" && day >= 19 || month === "March" && day <= 20) {
    console.log("Pisces");
    document.querySelector('#horoChar').innerText="Pisces: Sailor Neptune!"
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609853855/sailorneptune.png";
    document.querySelector('#result').innerText="Pisces is ruled by the planet Neptune, which rules over the sea, dreams, illusions, and mysteries. Sailor Neptune’s powers are directly related! She attacks with “deep submerges” in which she blasts water at her enemies. She’s also gifted with the classic Piscean intuition. When she senses something evil coming, she’ll say some mystical Pisces shit like “the sea is stormy.” Sailor Neptune definitely reps the Pisces community with her pronounced instincts and ties to the water!"
  } else if (month === "March" && day >= 21 || month === "April" && day <= 19) {
    console.log("Aries");
    document.querySelector('#horoChar').innerText="Aries: Sailor Mars!"
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609856060/sailormars.png";
    document.querySelector('#result').innerText="Quick to fight, quick to share her opinion, quick to protect her friends! Sailor Mars has a fiery intuition based around her psychic predictions that come from studying flames! She also shares the Aries desire to act NOW! Aries is ruled by Mars energy, which instills thick skin, an impulsive temperament, and a passionate drive. Sailor Mars fights with fire and soul!"
  } else if (month === "April" && day >= 20 || month === "May" && day <= 20) {
    console.log("Taurus");
    document.querySelector('#horoChar').innerText="Taurus: Luna!"
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609853854/luna.png";
    document.querySelector('#result').innerText="Luna! Luna the cat is Sailor Moon’s advisor, and serves as something of a guide to being a Guardian. She unites the Guardians to begin with! Taurus is a sign that likes to mull things over, and as a result, they usually have fixed opinions and can be very wise! Both Taureans and Luna love to give advice. They’re opinionated, caring, and make excellent mentors, just like Luna!"
  } else if (month === "May" && day >= 21 || month === "June" && day <= 20) {
    console.log("Gemini");
    document.querySelector('#horoChar').innerText="Gemini: Sailor Chibi Moon"
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609853855/sailorchibi.png";
    document.querySelector('#result').innerText="SPOILER ALERT: Sailor Chibi Moon is actually Sailor Moon and Tuxedo Mask’s child from the future who has time traveled. So who better to rep Chibi Moon than Gemini, the zodiac’s eternal child?! Geminis are known for their quick wit and sharp tongues, which accounts for the way Chibiusa teases her mother for being a crybaby. Geminis prefer to keep things light and fun than to let their emotions get the best of them. Like Chibi Moon, they’re more likely to use humor to cope with difficult situations!"
  } else if (month === "June" && day >= 21 || month === "July" && day <= 22) {
    console.log("Cancer");
    document.querySelector('#horoChar').innerText="Cancer: Sailor Moon!"
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609853854/sailormoon.png";
    document.querySelector('#result').innerText="For one thing, this is cannon and confirmed that she’s a Cancer. But let’s get into it anyways. Usagi, a.k.a. Sailor Moon, is emotional, loves sleeping, uses crying as a superpower, and has a particularly special connection with her cat. She uses the power of the moon, Cancer’s ruler, and often wins her battles by tapping into her sensitive side. She’s also naturally sweet and romantic (ahem, fell in love with Tuxedo Mask at first sight). Just like a Cancer, she comes off as soft but is actually a powerful force to be reckoned with!"
  } else if (month === "July" && day >= 23 || month === "August" && day <= 22) {
    console.log("Leo");
    document.querySelector('#horoChar').innerText="Leo: Tuxedo Mask!"
    document.getElementById('scout-image').src = "hhttps://res.cloudinary.com/dmw55rpol/image/upload/v1609853855/tuxedomask.gif";
    document.querySelector('#result').innerText="Tuxedo Mask has Big Leo Energy. Sure, he has a superiority complex, but he’s also hot as hell with a protector streak! He loves being the one to save the day; Tuxedo Mask always comes through in the moment when Sailor Moon needs him. He very much enjoys having a mysterious persona and keeping Sailor Moon guessing - some might call this the classic Leo taste for the dramatic!"
  } else if (month === "August" && day >= 23 || month === "September" && day <= 22) {
    console.log("Virgo");
    document.querySelector('#horoChar').innerText="Virgo: Sailor Mercury!"
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609853854/sailormercury.png";
    document.querySelector('#result').innerText="A super genius with an “IQ rumored to be over 9000”! Sailor Mercury uses the power of intelligence as her most valuable weapon. Virgos are ruled by the planet Mercury, which governs intellect, communication, and technology! This usually gives them a quick wit, an eye for details, and an analytical outlook - the same tools Sailor Mercury calls on to help Sailor Moon!"
  } else if (month === "September" && day >= 23 || month === "October" && day <= 22) {
    console.log("Libra");
    document.querySelector('#horoChar').innerText="Libra: Sailor Venus!"
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609853855/sailorvenus.png";
    document.querySelector('#result').innerText="The OG Sailor V - the Guardian of Love and Justice! If there’s ever been a Libra hero, this is her! Libra’s dominant planet is Venus, the planet of love and beauty - obviously the same planet that protects Sailor Venus! She can be a tad obsessed with her crushes, just like every single Libra you know. As the sign of the scales, Librans are very concerned with what’s fair and just, making Sailor Venus an excellent crime fighter!"
  } else if (month === "October" && day >= 23 || month === "November" && day <= 21) {
    console.log("Scorpio");
    document.querySelector('#horoChar').innerText="Scorpio: Sailor Pluto!"
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609853855/sailorpluto.png";
    document.querySelector('#result').innerText="Setsuna, also known as Sailor Pluto, is the soldier of revolution! She is the guardian of the space-time door, and her powers are linked to the underworld, space, and darkness. Similarly, Scorpio is the sign most closely connected with death and transformations. Scorpio’s ruling planet is also Pluto, making them a sign that is particularly skilled at handling difficult life changes. They tend to be persistent, resourceful, and bounce back from exposure to the darkness of the world better than other people!"
  } else if (month === "November" && day >= 22 || month === "December" && day <= 21) {
    console.log("Sagittarius");
    document.querySelector('#horoChar').innerText="Sagittarius: Sailor Jupiter"
    document.getElementById('scout-image').src = "https://res.cloudinary.com/dmw55rpol/image/upload/v1609853854/sailorjupiter.png";
    document.querySelector('#result').innerText="When Makoto, a.k.a. Sailor Jupiter, first comes to Usagi’s school, her tough-girl attitude intimidates the other girls because she’s known for her slightly combative spirit and independence. Yet, Usagi quickly becomes her friend and finds that these traits are amazing strengths to have in a friend! As a guardian, Sailor Jupiter uses to power of thunder, based on how many storms Sagittarius’ ruling planet undergoes! Both Sailor Jupiter and Sagittarius are feisty and always down for a fight."
  } 
}
