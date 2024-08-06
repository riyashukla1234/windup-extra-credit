import {useWindupString, CharWrapper} from 'windups';
import {css} from '@emotion/css';

const fadeInAnimationStyle = css`
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1.5;
        }
    }
    animation-name: fadeIn;
    animation-duration: 3s;
    animation-iteration-count: 1;
`;

const SpookyChar = ({children}) => {
    return <span className={fadeInAnimationStyle}>{children}</span>;
};

const GhostlyWindups = () => {
    const [text] = useWindupString('It was a dark and stormy night. The wind howled through the ancient oaks, their twisted branches scratching at the moonlit sky like skeletal fingers. In the small town of Ravenbrook, the streets were empty, save for the occasional flash of lightning illuminating the cobblestone paths and shuttered windows.\n' +
        '\n' +
        'At the edge of town, nestled in a grove of trees, stood an old, dilapidated mansion. Its once grand façade was now covered in ivy and decay. Locals whispered that it was haunted, that strange lights and eerie sounds emanated from within its crumbling walls. Few dared to venture near, especially on a night like this.\n' +
        '\n' +
        'Inside the mansion, a single candle flickered, casting long shadows across the dusty, cobweb-filled room. At a large oak table, Clara sat, her face illuminated by the candlelight. She had inherited the mansion from her eccentric great-uncle, who had passed away under mysterious circumstances. Despite the warnings, Clara was determined to uncover the secrets of her ancestral home.\n' +
        '\n' +
        'As she pored over her great-uncle’s journals, a sudden, loud crash echoed through the halls. Clara jumped, her heart pounding in her chest. Gathering her courage, she grabbed the candle and made her way towards the source of the noise. The wooden floorboards creaked beneath her feet as she navigated the labyrinthine corridors.\n' +
        '\n' +
        'The sound had come from the library, a vast room lined with towering bookshelves filled with ancient tomes. The large window at the far end of the room had blown open, allowing the storm to rage inside. Clara rushed to close it, but as she did, a gust of wind extinguished her candle, plunging the room into darkness.\n' +
        '\n' +
        'Fumbling in her pocket, she found a match and relit the candle. As the light returned, Clara noticed something peculiar. A single book lay on the floor, having apparently fallen from one of the shelves. She picked it up, its leather cover worn and weathered. The title, "The Chronicles of Ravenbrook," was barely legible.\n' +
        '\n' +
        'Intrigued, Clara sat down and began to read. The book recounted the history of the town, detailing its founding by a group of settlers fleeing persecution. It spoke of hidden treasures and ancient curses, but one chapter, in particular, caught her eye. It described a secret room within the mansion, hidden behind a false wall in the library.\n' +
        '\n' +
        'With renewed determination, Clara began to examine the shelves, tapping and feeling for any signs of a hidden mechanism. After what felt like hours, she found a loose panel. With a gentle push, the bookshelf swung open, revealing a narrow staircase leading downward.\n' +
        '\n' +
        'Taking a deep breath, Clara descended into the darkness, her candle flickering ominously. The air grew colder, and she could feel a presence, as if unseen eyes were watching her every move. At the bottom of the stairs, she found herself in a small, stone chamber. In the center of the room was a pedestal, and atop it, an ornate, ancient key.\n' +
        '\n' +
        'As she reached for the key, a shadowy figure materialized before her, its form shifting and indistinct. Clara froze, her breath catching in her throat. The figure spoke, its voice echoing in the chamber. "Who dares to disturb my resting place?"\n' +
        '\n' +
        '"I am Clara," she replied, her voice trembling. "I seek the truth about my family and this mansion."\n' +
        '\n' +
        'The figure seemed to study her for a moment before it spoke again. "Your great-uncle was the last guardian of the key, tasked with protecting its secret. Now, that duty falls to you. But beware, for with this knowledge comes great danger."\n' +
        '\n' +
        'Clara nodded, her resolve unwavering. She took the key, feeling a surge of energy as she did. The figure vanished, leaving her alone in the chamber. As she ascended the stairs and returned to the library, she knew her life had changed forever. The key was more than just a family heirloom; it was a gateway to the hidden mysteries of Ravenbrook.\n' +
        '\n' +
        'From that night on, Clara dedicated herself to unraveling the secrets of the mansion and the town. She discovered hidden passages, long-lost artifacts, and uncovered the true history of her ancestors. But with each revelation came new challenges and threats, testing her courage and resolve.\n' +
        '\n' +
        'And so, on that dark and stormy night, a new chapter in the legacy of Ravenbrook began, with Clara at its center, ready to face whatever haunted secrets awaited her..');
    return (
        <div>
            <CharWrapper element={SpookyChar}>{text}</CharWrapper>
        </div>
    );
};

export default GhostlyWindups;
