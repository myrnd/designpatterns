interface BallPen {
    write(str: string): void;
}

class Assignment {
    private pen: BallPen;

    public setPen(pen: BallPen) {
        this.pen = pen;
    }

    public writeAssignment(str: string) {
        this.pen.write(str);
    }
}

class LegacyPen {
    public markInk(str: string) {
        console.log(str);
    }
}


class LegacyPenAdapter implements BallPen {
    private legacyPen: LegacyPen;

    constructor(legacyPen: LegacyPen) {
        this.legacyPen = legacyPen;
    }

    public write(str: string): void {
        this.legacyPen.markInk(str);
    }
}

const pen = new LegacyPen();

const assignmentWork = new Assignment();

assignmentWork.setPen(new LegacyPenAdapter(pen));

// assignmentWork.setPen(new BallPen());

assignmentWork.writeAssignment('I am bit tired to write assignemnt');