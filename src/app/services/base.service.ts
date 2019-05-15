import { AngularFirestore } from 'angularfire2/firestore';
export class BaseService {

  protected basePath = '';
  constructor(protected angularFirestore: AngularFirestore, path: string) {
    this.basePath = path;
  }

  public update(data) {
    const timestamp = this.timestamp;
    return this.angularFirestore.collection(this.basePath).doc(data.id).set({
      ...data, createdAt: timestamp
    });
  }

  public create(data) {
    const timestamp = this.timestamp;
    return this.angularFirestore.collection(this.basePath).add({
      ...data, createdAt: timestamp
    });
  }

  public getAll(query?) {
    return this.angularFirestore.collection<any>(this.basePath).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  public getLimit(limit) {
    return this.angularFirestore.collection<any>(this.basePath, ref => ref.limit(limit)).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  public getById(id) {
    let itemPath = `${this.basePath}/${id}`;
    return this.angularFirestore.doc<any>(itemPath).valueChanges();
  }
  public getBySlug(slug){
    return this.angularFirestore.collection<any>(this.basePath, ref=>ref.where('slug','==',slug)).valueChanges();
  }

  get timestamp() {
    return new Date();
  }

  public delete(id) {
    return this.angularFirestore.collection(this.basePath).doc(id).delete();
  }
}
