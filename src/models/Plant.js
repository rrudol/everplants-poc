import firebase from "../components/Firebase";
import uuidv1 from "uuid/v1";

class Plant {
  constructor(data, collection, path) {
    this._data = data;
    this._collection = collection;
    this._path = path;

    this.delete = this.delete.bind(this);
  }
  set(changes) {
    return this._collection.doc(this.id).set({
      ...this._data,
      ...changes
    });
  }
  get id() {
    return this._data.id;
  }
  get name() {
    return this._data.name;
  }
  set name(name) {
    if (name) this.set({ name });
  }
  get species() {
    return this._data.species;
  }
  set species(species) {
    if (species) this.set({ species });
  }
  get image() {
    return this._data.image;
  }
  get last() {
    return this._data.last;
  }
  get happiness() {
    return this._data.happiness;
  }
  get days() {
    return this._data.days;
  }
  get data() {
    return this._data;
  }
  delete() {
    if (window.confirm(`Are you sure? ${this.name} will be deleted 🥀`))
      this._collection.doc(this.id).delete();
  }
  get storageRef() {
    return firebase.storage().ref();
  }
  get photoRef() {
    return firebase.storage().ref(this.image);
  }
  async removePhoto() {
    await this.photoRef.delete();
    this.set({ image: `${this._path}/${this.id}` + uuidv1() });
  }
  async uploadPhoto(e) {
    const image = `${this._path}/${this.id}` + uuidv1();
    await this.storageRef.child(image).put(e.target.files[0]);
    this.set({ image });
  }
  get draining() {
    const d = Math.round(Date.now() / 86400000 - this.last);
    return d > this.days;
  }
  water() {
    this.set({ last: Date.now() / 864000000, happiness: this.happiness + 1 });
  }
  get nextWatering() {
    return this.days - Math.round(Date.now() / 86400000 - this.last);
  }
  get path() {
    return this._path;
  }
}

export default Plant;
