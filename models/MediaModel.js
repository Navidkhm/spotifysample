import { observable } from 'mobx';
import List from '../components/List';


class MediaModel {
    @observable musicsrc = '';
}

const Mediamodel = new MediaModel;
export default Mediamodel;