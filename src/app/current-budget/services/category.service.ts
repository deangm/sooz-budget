import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import {Category} from '../interface/category'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesRef: AngularFirestoreCollection<Category>

  constructor(private db: AngularFirestore) { 
    this.categoriesRef = this.db.collection<Category>('categories');

  }

getCategoriesObservable(): Observable<Category[]>{
  return this.categoriesRef.snapshotChanges()
  .pipe(
    map((items: DocumentChangeAction<Category>[]): Category[] => {
      return items.map((item: DocumentChangeAction<Category>): Category => {
        return {
          id: item.payload.doc['id'],
          name: item.payload.doc.data().name,
          allowed_amount: item.payload.doc.data().allowed_amount,
          spent: item.payload.doc.data().spent
        }
      })
    }),
    catchError(this.errorHandler)
  )
}

private errorHandler(error) {
  console.log(error);
  return throwError(error);
}

}
