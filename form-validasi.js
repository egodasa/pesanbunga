var validasi = {
	'Tusername': {
		notEmpty : {
			errorMessage : 'Username harus diisi ...'
		},
		isAlphanumeric : {
			errorMessage : 'Username hanya dapat berupa huruf dan angka ...'
		},
		isLength : {
			options : [{min : 3,max : 20}],
			errorMessage : 'Username harus berisikan minimal 3 karakter dan maksimal 20 karakter ...'
		},
		cekUsername : {
				errorMessage : 'Username sudah dipakai. Silahkan gunakan yang lain ...'
		}
	},
	'Tpassword1': {
		notEmpty : {
			errorMessage : 'Password harus diisi ...'
		},
		isLength : {
			options : [{min : 6,max : 12}],
			errorMessage : 'Password minimal 6 karakter dan maksimal 12 karakter ...'
		}
	},
	'Tnama': {
		notEmpty : {
			errorMessage : 'Nama harus diisi ...'
		},
		matches : {
			options : [/[a-zA-Z 0-9]{3,50}/i],
			errorMessage : "Nama minimal 3 karakter dan maksimal 50 karakter"
		},
		isLength : {
			options : [{min : 3,max : 50}],
			errorMessage : 'Nama harus berisikan minimal 3 karakter dan maksimal 50 karakter ...'
		}
	},
	'Temail': {
		optional : true,
		isEmail : {
			errorMessage : 'Penulisan email tidak benar ...'
			},
		isLength : {
			options : [{min : 5,max : 50}],
			errorMessage : 'Email harus berisikan minimal 3 karakter dan maksimal 50 karakter ...'
		}
	},
	'Tnohp': {
		notEmpty : {
			errorMessage : 'Nohp harus diisi ...'
		},
		matches : {
			options : [/(628[0-9]{10,11})|(08[0-9]{9,10})/i],
			errorMessage : "Penulisan Nohp tidak benar ..."
		},
	}
};
module.exports = validasi;
