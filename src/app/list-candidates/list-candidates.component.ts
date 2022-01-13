import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import api from 'src/services/api';

interface Candidates {
  id: number;
  email: string;
}

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.css']
})
export class ListCandidatesComponent implements OnInit {
  candidateIdSelected = 0;
  candidates: Candidates[] = []

  showModalDelete = false;
  showModalAdd = false;
  showModalEdit = false;

  displayedColumns: string[] = ['id', 'email', 'actions'];

  addForm = this.formBuilder.group({
    full_name: '',
    email: '',
    password: '',
  })

  editForm = this.formBuilder.group({
    full_name: '',
    email: '',
    password: '',
  })

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) { }

  loadUsers = async () => {
    try {
      const response =  await api.get('/candidate');
      this.candidates = response.data;
    } catch {
      this.toastr.error('Erro ao carregar candidatos!')
    }
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  toggleModalDelete = () => {
    this.showModalDelete = !this.showModalDelete;
  }

  toggleModalEdit = () => {
    this.showModalEdit = !this.showModalEdit;
  }

  toggleModalAdd = () => {
    this.showModalAdd = !this.showModalAdd;
  }

  handleDeleteCandidate = async (id: number) => {
    // const response = await api.delete(`/candidate/${id}/delete`)
    // console.log(response.data);

    this.toggleModalDelete();
  }

  handleSubmitAddCandidateForm = async () => {
    const { full_name, email, password } = this.addForm.value;

    try {
      await api.post('/candidate/', {
        email,
        full_name,
        password,
      })

      this.toastr.success('Candidato cadastrado!', 'Sucesso!');
      this.loadUsers();
      this.toggleModalAdd()
      this.addForm.setValue({
        full_name: '',
        email: '',
        password: '',
      })
    } catch {
      this.toastr.error('Erro ao criar candidato!');
    }
  }

  handleEditCandidate = async (id: number) => {
    this.toggleModalEdit();
    this.candidateIdSelected = id;

    const response = await api.get(`/candidate/${id}`)

    const { full_name, email } = response.data;


    this.editForm.setValue({
      full_name,
      email,
      password: '',
    })
  }

  handleSubmitEditCandidate = async () => {
    const { full_name, email, password } = this.editForm.value;

    try {
      await api.put(`/candidate/${this.candidateIdSelected}`, {
        email,
        full_name,
        password,
      })

      this.toastr.success('Candidato alterado!', 'Sucesso!');
      this.loadUsers();
      this.toggleModalEdit()
      this.editForm.setValue({
        full_name: '',
        email: '',
        password: '',
      })
    } catch {
      this.toastr.error('Erro ao editar candidato!');
    }
  }

  handleLogout = () => {
    this.router.navigate(['/'])
  }
}
