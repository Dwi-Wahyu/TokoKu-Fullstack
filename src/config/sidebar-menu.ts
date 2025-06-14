import {
  Activity,
  BookAudio,
  BookType,
  FileUser,
  LayoutDashboard,
  ScrollText,
  SquareUserRound,
  UserPen,
  UserPlus,
  Users,
  UsersRound,
} from "lucide-react";

export const dosenSidebarMenu = {
  navMain: [
    {
      title: "Utama",
      url: "/admin",
      items: [
        {
          title: "Dashboard",
          url: "dashboard",
          icon: LayoutDashboard,
          isDropdown: false,
          items: [],
        },

        {
          title: "Permohonan Bimbingan",
          url: "permohonan-bimbingan",
          icon: FileUser,
          isDropdown: false,
          items: [],
        },
        {
          title: "Kegiatan",
          url: "kegiatan",
          icon: Activity,
          isDropdown: true,
          items: [
            {
              title: "Semester 1",
              url: "?semester=1",
              isQuery: true,
            },
            {
              title: "Semester 2",
              url: "?semester=2",
              isQuery: true,
            },
            {
              title: "Semester 3",
              url: "?semester=3",
              isQuery: true,
            },
            {
              title: "Semester 4",
              url: "?semester=4",
              isQuery: true,
            },
            {
              title: "Semester 5",
              url: "?semester=5",
              isQuery: true,
            },
            {
              title: "Semester 6",
              url: "?semester=6",
              isQuery: true,
            },
          ],
        },
      ],
    },
    {
      title: "Pengguna",
      url: "/admin/pengguna",
      items: [
        {
          title: "Mahasiswa Bimbingan",
          url: "mahasiswa-bimbingan",
          icon: SquareUserRound,
          isDropdown: false,
          items: [],
        },
      ],
    },
    {
      title: "Pengaturan",
      url: "/admin/pengaturan",
      items: [
        {
          title: "Mata Kuliah",
          url: "mata-kuliah",
          icon: BookType,
          isDropdown: false,
          items: [],
        },
      ],
    },
  ],
};

export const mahasiswaSidebarMenu = {
  navMain: [
    {
      title: "Utama",
      url: "/admin",
      items: [
        {
          title: "Dashboard",
          url: "dashboard",
          icon: LayoutDashboard,
          isDropdown: false,
          items: [],
        },
        {
          title: "Pengajuan Bimbingan",
          url: "pengajuan-bimbingan",
          icon: FileUser,
          isDropdown: false,
          items: [],
        },
        {
          title: "Logbook Anda",
          url: "logbook-anda",
          icon: ScrollText,
          isDropdown: false,
          items: [],
        },
        {
          title: "Kegiatan",
          url: "kegiatan",
          icon: Activity,
          isDropdown: true,
          items: [
            {
              title: "Semester 1",
              url: "?semester=1",
              isQuery: true,
            },
            {
              title: "Semester 2",
              url: "?semester=2",
              isQuery: true,
            },
            {
              title: "Semester 3",
              url: "?semester=3",
              isQuery: true,
            },
            {
              title: "Semester 4",
              url: "?semester=4",
              isQuery: true,
            },
            {
              title: "Semester 5",
              url: "?semester=5",
              isQuery: true,
            },
            {
              title: "Semester 6",
              url: "?semester=6",
              isQuery: true,
            },
          ],
        },
      ],
    },

    {
      title: "Pengaturan",
      url: "/admin/pengaturan",
      items: [
        {
          title: "Mata Kuliah",
          url: "mata-kuliah",
          icon: BookType,
          isDropdown: false,
          items: [],
        },
      ],
    },
  ],
};

export const adminSidebarMenu = {
  navMain: [
    {
      title: "Utama",
      url: "/admin",
      items: [
        {
          title: "Dashboard",
          url: "dashboard",
          icon: LayoutDashboard,
          isDropdown: false,
          items: [],
        },
        {
          title: "Kegiatan",
          url: "kegiatan",
          icon: BookAudio,
          isDropdown: true,
          items: [
            {
              title: "Semester 1",
              url: "?semester=1",
              isQuery: true,
            },
            {
              title: "Semester 2",
              url: "?semester=2",
              isQuery: true,
            },
            {
              title: "Semester 3",
              url: "?semester=3",
              isQuery: true,
            },
            {
              title: "Semester 4",
              url: "?semester=4",
              isQuery: true,
            },
            {
              title: "Semester 5",
              url: "?semester=5",
              isQuery: true,
            },
            {
              title: "Semester 6",
              url: "?semester=6",
              isQuery: true,
            },
          ],
        },
      ],
    },
    {
      title: "Pengguna",
      url: "/admin/pengguna",
      items: [
        {
          title: "Dosen",
          url: "dosen",
          icon: UsersRound,
          isDropdown: false,
          items: [],
        },
        {
          title: "Mahasiswa",
          url: "mahasiswa",
          icon: Users,
          isDropdown: false,
          items: [],
        },
        {
          title: "Tambah Pengguna",
          url: "tambah-pengguna",
          icon: UserPlus,
          isDropdown: false,
          items: [],
        },
      ],
    },
    {
      title: "Pengaturan",
      url: "/admin/pengaturan",
      items: [
        {
          title: "Mata Kuliah",
          url: "mata-kuliah",
          icon: BookType,
          isDropdown: false,
          items: [],
        },
      ],
    },
  ],
};
