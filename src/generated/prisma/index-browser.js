
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PenggunaScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  username: 'username',
  password: 'password',
  peran: 'peran',
  avatar: 'avatar',
  signature: 'signature',
  pembimbingId: 'pembimbingId',
  koPromotorId: 'koPromotorId',
  promotorId: 'promotorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.KegiatanScalarFieldEnum = {
  id: 'id',
  judul: 'judul',
  lokasi: 'lokasi',
  tanggalMulai: 'tanggalMulai',
  tanggalSelesai: 'tanggalSelesai',
  catatan: 'catatan',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  pengajuId: 'pengajuId',
  mata_kuliahId: 'mata_kuliahId'
};

exports.Prisma.LogbookScalarFieldEnum = {
  id: 'id',
  path: 'path',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  penggunaId: 'penggunaId'
};

exports.Prisma.ProfilScalarFieldEnum = {
  id: 'id',
  judulDisertasi: 'judulDisertasi',
  angkatan: 'angkatan',
  tempatTanggalLahir: 'tempatTanggalLahir',
  alamat: 'alamat',
  alamatKeluarga: 'alamatKeluarga',
  tahunLulus: 'tahunLulus',
  mulaiMasukPendidikan: 'mulaiMasukPendidikan',
  pekerjaan: 'pekerjaan',
  nomorTelpon: 'nomorTelpon',
  email: 'email',
  penggunaId: 'penggunaId'
};

exports.Prisma.Permohonan_bimbinganScalarFieldEnum = {
  id: 'id',
  statusPermohonan: 'statusPermohonan',
  kalimatPermohonan: 'kalimatPermohonan',
  alasanDitolak: 'alasanDitolak',
  mahasiswaId: 'mahasiswaId',
  dosenId: 'dosenId',
  createdAt: 'createdAt'
};

exports.Prisma.Mata_kuliahScalarFieldEnum = {
  id: 'id',
  judul: 'judul',
  semester: 'semester',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Lampiran_kegiatanScalarFieldEnum = {
  id: 'id',
  path: 'path',
  ext: 'ext',
  kegiatanId: 'kegiatanId'
};

exports.Prisma.NotifikasiScalarFieldEnum = {
  id: 'id',
  judul: 'judul',
  pesan: 'pesan',
  dibaca: 'dibaca',
  createdAt: 'createdAt',
  penggunaId: 'penggunaId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.penggunaOrderByRelevanceFieldEnum = {
  id: 'id',
  nama: 'nama',
  username: 'username',
  password: 'password',
  avatar: 'avatar',
  signature: 'signature',
  pembimbingId: 'pembimbingId',
  koPromotorId: 'koPromotorId',
  promotorId: 'promotorId'
};

exports.Prisma.kegiatanOrderByRelevanceFieldEnum = {
  judul: 'judul',
  lokasi: 'lokasi',
  catatan: 'catatan',
  pengajuId: 'pengajuId'
};

exports.Prisma.logbookOrderByRelevanceFieldEnum = {
  path: 'path',
  penggunaId: 'penggunaId'
};

exports.Prisma.profilOrderByRelevanceFieldEnum = {
  judulDisertasi: 'judulDisertasi',
  angkatan: 'angkatan',
  tempatTanggalLahir: 'tempatTanggalLahir',
  alamat: 'alamat',
  alamatKeluarga: 'alamatKeluarga',
  tahunLulus: 'tahunLulus',
  pekerjaan: 'pekerjaan',
  nomorTelpon: 'nomorTelpon',
  email: 'email',
  penggunaId: 'penggunaId'
};

exports.Prisma.permohonan_bimbinganOrderByRelevanceFieldEnum = {
  kalimatPermohonan: 'kalimatPermohonan',
  alasanDitolak: 'alasanDitolak',
  mahasiswaId: 'mahasiswaId',
  dosenId: 'dosenId'
};

exports.Prisma.mata_kuliahOrderByRelevanceFieldEnum = {
  judul: 'judul'
};

exports.Prisma.lampiran_kegiatanOrderByRelevanceFieldEnum = {
  path: 'path',
  ext: 'ext'
};

exports.Prisma.notifikasiOrderByRelevanceFieldEnum = {
  judul: 'judul',
  pesan: 'pesan',
  penggunaId: 'penggunaId'
};
exports.pengguna_peran = exports.$Enums.pengguna_peran = {
  ADMIN: 'ADMIN',
  MAHASISWA: 'MAHASISWA',
  DOSEN: 'DOSEN'
};

exports.kegiatan_status = exports.$Enums.kegiatan_status = {
  DIAJUKAN: 'DIAJUKAN',
  DISETUJUI: 'DISETUJUI',
  DITOLAK: 'DITOLAK'
};

exports.status_permohonan = exports.$Enums.status_permohonan = {
  TERKIRIM: 'TERKIRIM',
  DITOLAK: 'DITOLAK',
  DISETUJUI: 'DISETUJUI'
};

exports.Prisma.ModelName = {
  pengguna: 'pengguna',
  kegiatan: 'kegiatan',
  logbook: 'logbook',
  profil: 'profil',
  permohonan_bimbingan: 'permohonan_bimbingan',
  mata_kuliah: 'mata_kuliah',
  lampiran_kegiatan: 'lampiran_kegiatan',
  notifikasi: 'notifikasi'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
