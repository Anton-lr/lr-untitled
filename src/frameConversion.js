export const tsToFrames = ([m, s, f]) => {
    let fr = f
    fr += s * 40
    fr += m * 2400
    return fr;
}

export const framesToTs = (frames) => {
    if (Array.isArray(frames)) {
        return frames;
    }
    const m = Math.floor(frames / 2400) //frames 2400
    frames = frames % 2400
    const s = Math.floor(frames / 40)
    const f = frames % 40
    return [m, s, parseInt(f)] //<p>[{m}, {s}, {f}]</p>
}

export const framesToTsString = (frames) => {
    const m = Math.floor(frames / 2400) //frames 2400
    frames = frames % 2400
    const s = Math.floor(frames / 40)
    const f = frames % 40
    const st = "[" + { m } + { s } + { f } + "]"
    return st
}

export const printTs = (list) => {
    const s = list.toString()
    return "[" + s + "]"
}


export const createElement = (frame, data) => {
    if (typeof (frame) == "number") {
        frame = framesToTs(frame);
    }
    return [frame, data];
}

export const createEvent = (startFrame, endFrame, startData, endData) => {
    let sff = tsToFrames(framesToTs(startFrame))
    let eff = tsToFrames(framesToTs(endFrame))
    if (eff > sff) {
        console.log("endFrame must come after startFrame")
    }
    let a = createElement(startFrame, startData);
    let b = createElement(endFrame, endData);

    return [a, b]
}