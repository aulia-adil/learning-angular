import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ref, uploadBytes} from "@angular/fire/storage";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-form-image',
  templateUrl: './form-image.component.html',
  styleUrls: ['./form-image.component.sass']
})
export class FormImageComponent {
  form: FormGroup = this.fb.group({
    image: new FormControl('')
  });
  private selectedFile: File = {} as File
  fileName: string = '';

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private storage: AngularFireStorage) {
  }

  onSubmit() {
    const file = this.form.get('image')?.value;
    console.log(file);
    const storageRef = ref(this.storage.storage, 'images/fast-learner/' + file.name)
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }

  onFileSelected(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      let file = input.files[0];
      if (!file.type.startsWith('image')) {
        this.form.get(field)?.setErrors({
          required: true
        });
        this.cd?.markForCheck();
      } else {
        this.fileName = file.name;
        // unlike most tutorials, i am using the actual Blob/file object instead of the data-url
        this.form.patchValue({
          [field]: file
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      }
    }
  }
}
