export default {
  meta: {
    auth: {
      requiresAuth: false
    }
  },
  layout: "home",
  data: () => ({
    show1: true,
    show2: false,
    show3: true,
    show4: false,
    agreement: false,
    dialog: false,
    email: undefined,
    form: false,
    items: [
      {
        name: "Lender",
        value: "LENDER_ROLE"
      },
      {
        name: "Borrower",
        value: "BORROWER_ROLE"
      }
    ],
    role:null,
    isLoading: false,
    password: undefined,
    username: undefined,
    rePassword: undefined,
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      length: len => v => (v || "").length >= len || `Invalid character length, required ${len}`,
      password: v =>
        (v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: v => !!v || "This field is required"
    }
  }),
  computed: {

  },
  methods: {
    signUpWithCredentials() {
      let data = {
        username: this.username,
        password: this.password,
        email: this.email,
        role:this.role

      };
      this.$store.dispatch('register', data);
    }

  }
};
