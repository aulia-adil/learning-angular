import { Component } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ref, uploadBytes, uploadBytesResumable} from "@angular/fire/storage";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-angular-app';
  private selectedFile: File = {} as File;

  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    // Upload a JPEG image to the bucket
    const filePromise = this.readFile("assets\\KTP Adil.jpeg")
    const storageRef = ref(this.storage.storage, 'images/KTP Adil.jpeg')

    // filePromise.then((file) => {
    //   uploadBytes(storageRef, file).then((snapshot) => {
    //     console.log('Uploaded a blob or file!');
    //   })
    // })
  }

  async readFile(src: string) {
    // Replace 'path/to/your/file.txt' with the actual path to your local file
    const filePath = src
    const fileData = await this.readFileAsync(filePath);

    // Create the File object
    const file = new File([fileData], 'KTP Adil.jpeg', { type: 'image/jpeg' });

    // Now you have the File object, and you can use it as needed
    return file
  }

  private readFileAsync(filePath: string): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', filePath, true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = () => {
        if (xhr.status === 200) {
          const arrayBuffer = xhr.response as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          resolve(uint8Array);
        } else {
          reject(new Error('Failed to read the file'));
        }
      };

      xhr.onerror = () => {
        reject(new Error('Failed to read the file'));
      };

      xhr.send();
    });
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFile = input.files[0];
    }
  }

  upload() {
    if (this.selectedFile) {

    }
  }
}
