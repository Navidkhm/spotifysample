import {action, observable} from 'mobx';

class VolumeModel {
   @observable volume = 100;
   @observable muted = 0;
}

const Volumemodel = new VolumeModel;
export default Volumemodel;