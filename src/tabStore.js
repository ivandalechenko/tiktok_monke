import { makeAutoObservable, observable } from 'mobx';

class MetricStore {
    tab = 'Home';
    vid = 1;

    constructor() {
        makeAutoObservable(this); // Делает все свойства наблюдаемыми
    }
    changeTab(tab) {
        this.tab = tab
    }
    openVid(num) {
        this.vid = num
        this.tab = 'Home'
    }

    nextVid() {
        // this.tab = 'Home'
        this.vid = this.vid + 1 < 22 ? this.vid + 1 : 1
        console.log(this.vid);
    }
    prevVid() {
        this.vid = this.vid - 1 > 0 ? this.vid - 1 : 21
        console.log(this.vid);

    }
}
export default new MetricStore();