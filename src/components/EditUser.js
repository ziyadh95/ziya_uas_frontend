import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditUser = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [kelas, setKelas] = useState("");
  const [semester, setSemester] = useState("");
  const [jenis_kelamin, setJenis_kelamin] = useState("Male");
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getUserById();
  }, []);
 
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNama(response.data.nama);
    setNim(response.data.nim);
    setKelas(response.data.kelas);
    setSemester(response.data.semester);
    setJenis_kelamin(response.data.jenis_kelamin);
    setAlamat(response.data.alamat);
  };
 
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nama,
        nim,
        kelas,
        semester,
        jenis_kelamin,
        alamat,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nim</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Nim"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Kelas</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                placeholder="Kelas"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Semester</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                placeholder="Semester"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jenis_kelamin</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={jenis_kelamin}
                  onChange={(e) => setJenis_kelamin(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditUser;