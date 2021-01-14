import { observable } from 'mobx';

class DetailsModel{

     album = [['Tenet','Ludwig Göransson','The plan','Foils','Sator'],['Soul',
     'Cody, ChesnuttDaveed, MacDougallWilliam, Hutson','Lost Soul','Terry Time','Rappin Ced','Falling','Thank You'],
     ['Barmigardam','Arman Garshasby','Barmigardam']]
     
    @observable pic = '/images/barmigardam.jpg';
    @observable name = 'Barmigardam';
    @observable artist = 'Arman Garshasbi'
    @observable songalbum = 'Barmigardam'

}

const Detailsmodel = new DetailsModel;
export default Detailsmodel;
