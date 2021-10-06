<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-start wrap>
      <v-flex xs12 md4 sm10 class="mt-0 ml-0">
        <v-container py-0>
          <v-layout wrap>
            <v-flex xs20 md20 class="pa-0 ma-0">
              <v-card class="mx-auto" raised height="300">
                <v-img
                  src="data:image/jpeg;base64,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"
                  lazy-src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/2/adelie-penguin-on-ice-theo-allofs.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  height="500"
                  max-height="320"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-card-title>
                  {{ userdata.username }}
                  <v-icon color="primary" size="20" v-show="userdata.is_active">mdi-check-decagram</v-icon>
                </v-card-title>
                <v-card-subtitle>{{ userdata.role }}</v-card-subtitle>
              </v-card>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-type-divider type="Info"></v-type-divider>
            </v-flex>
            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address"></v-address-card>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-type-divider type="Work"></v-type-divider>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address1"></v-address-card>
            </v-flex>
            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address2"></v-address-card>
            </v-flex>
            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-type-divider type="Skills"></v-type-divider>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium">UI/UX</span>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium">Branding</span>
            </v-flex>
            <v-flex xs12 md12>
              <h6 class="text-caption font-weight-medium">Web - Design</h6>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium">Packaging</span>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium">Print & Editorial</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 md8 sm12 class="mt-0 ml-0 primary lighten-2">
        <v-card flat class="pa-1" tile>
          <v-container py-0>
            <v-layout wrap>
              <v-flex xs12 md12>
                <v-list>
                  <v-list-item-group color="primary">
                    <v-list-item two-line inactive :ripple="false">
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-row>
                            <v-col>
                              <span class="font-weight-bold text-h5">
                                {{
                                userdata.first_name
                                }}&nbsp; {{ userdata.last_name }}
                              </span>
                            </v-col>
                            <v-col>
                              <span class="font-weight-light text-caption">
                                <v-icon>mdi-map-marker</v-icon>New York, NY
                              </span>
                            </v-col>
                          </v-row>
                        </v-list-item-title>
                        <v-list-item-subtitle
                          class="primary--text text-caption font-weight-medium"
                        >{{ userdata.role }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      v-if="userdata !== undefined"
                      two-line
                      inactive
                      :ripple="false"
                      class="mt-8"
                    >
                      <v-list-item-content>
                        <v-list-item-subtitle class="text-overline">{{ $t('label.text.Rankings') }}</v-list-item-subtitle>
                        <v-list-item-title v-if="userdata.lender_profile">
                          <v-row align="center" justify="start">
                            <v-col cols="2" v-if="userdata.lender_profile">
                              <span
                                class="font-weight-bold text-h5"
                              >{{ userdata.lender_profile.raters_count }}</span>
                            </v-col>
                            <v-col cols="4">
                              <v-rating
                                half-increments
                                :full-icon="fullIcon"
                                :half-icon="halfIcon"
                                :empty-icon="emptyIcon"
                                background-color="primary"
                                v-model="rating"
                                @input="rate = true"
                                :value="parseInt(userdata.lender_profile.rtotal_rating_score)"
                              ></v-rating>
                            </v-col>
                            <v-col sm="1" v-show="userdata.is_lender">
                              <v-btn
                                x-small
                                color="primary"
                                v-show="rate"
                                @click.stop="rateThisPersonLanderProfile()"
                              >Rate</v-btn>
                            </v-col>
                          </v-row>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item inactive :ripple="false">
                      <v-container fluid>
                        <v-row no-gutters>
                          <v-col
                            class="font-weight-bold text-overline primary--text"
                          >{{ userdata.follows_count }} {{ $t('label.text.Followers') }}</v-col>
                          <v-col
                            class="font-weight-bold text-overline primary--text"
                          >{{ userdata.following_count }} {{ $t('label.text.Follows') }} </v-col>
                        </v-row>
                      </v-container>
                    </v-list-item>
                    <v-list-item inactive :ripple="false">
                      <v-list-item-content>
                        <v-container fluid>
                          <v-row no-gutters>
                            <v-col xs="12" md="3" class="ma-1">
                              <v-btn
                                v-if="userdata.is_following_me"
                                @click.stop="unfollowThisPerson"
                                small
                                rounded
                                cols="auto"
                                color="primary"
                                block
                              >Following</v-btn>
                              <v-btn
                                v-else
                                small
                                rounded
                                outlined
                                cols="auto"
                                @click.stop="followThisPerson"
                                color="primary"
                                block
                              > {{ $t('label.button.btnFollow') }}</v-btn>
                            </v-col>
                            <v-col sm="12" md="3" class="ma-1">
                              <v-btn small cols="auto" block>
                                <v-icon small>mdi-check</v-icon>&nbsp; {{ $t('label.button.btncontacts') }}
                              </v-btn>
                            </v-col>
                            <v-col sm="12" md="3" class="ma-1">
                              <v-btn
                                small
                                text
                                outlined
                                color="primary"
                                class="font-weight-normal"
                                cols="auto"
                                block
                              >
                                <v-icon small>mdi-bug</v-icon>&nbsp;{{ $t('label.button.btnReportUser') }}
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-list-item-content>
                    </v-list-item>
                    
                            
                  </v-list-item-group>
                </v-list>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="js">
import c_type_divider from "@/components/profile/c_type_divider";
import c_address_card from "@/components/profile/c_address_card";
import postCard from "@/components/posts/p_post_card"
import c_follows from "@/components/follows/c_follows";

export default {
  props: {userdata:Object},
  components: {
    'post-card': postCard,
    'v-type-divider': c_type_divider,
    'v-address-card': c_address_card,
    'v-follows': c_follows
  },
  data() {
    return {
      dialog: false,
      rate: false,
      tab: null,
      rating: 2,
      posts: null,
      comments: null,
      followers: null,
      followings: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      emptyIcon: 'mdi-star-outline',
      fullIcon: 'mdi-star',
      halfIcon: 'mdi-star-half-full',
      address: {
        location: '',
        class: '',
        street_name: '',
        street_address: ''
      },
      address1: {
        location: "Spotify New York",
        class: "Primary",
        street_name: "170 William Street",
        street_address: "New York, NY 10038-78 212-312-51\n"
      },
      address2: {
        location: "Metropolitan Museum",
        class: "Secondary",
        street_name: "S45 E 68th Street",
        street_address: "New York, NY 10038-78 212-312-51\n"
      },


    }
  },
  created() {
    this.address.location = this.userdata.username;
    this.address.class = "Home Address";
    this.address.street_name = "Phone No. " + this.userdata.phone;
    this.address.street_address = "Email Address " + this.userdata.email;

  },
  methods: {
    async getThisUserPosts() {
      console.log("Clicked" + this.$route.params.id)
      return await this.$api.$get(`users/${this.$route.params.id}/posts/?type=post`)
        .then(response => {
          this.posts = response;
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisUserComments() {
      console.log("Clicked" + this.$route.params.id)
      return await this.$api.$get(`users/${this.$route.params.id}/comments/`)
        .then(response => {
          this.comments = response;
        }).catch(error => {
          console.log(error);

        });
    },
    async unfollowThisPerson() {
      return await this.$api.$post(`/unfollow-user/`, {"id": this.$route.params.id})
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);

        });

    },
    async followThisPerson() {
      return await this.$api.$post(`/follow-user/`, {"id": this.$route.params.id})
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisPersonFollowers() {
      return await this.$api.$get(`users/${this.$route.params.id}/follows/`)
        .then(response => {
          if (response !== null) {
            this.followers = response;
          }
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisPersonFollowings() {
      return await this.$api.$get(`users/${this.$route.params.id}/following/`)
        .then(response => {
          if (response !== null) {
            this.followings = response;
            this.followings = response;
          }
        }).catch(error => {
          console.log(error);

        });
    },
    addRating() {
      this.rate = true;
    },
    async rateThisPersonLanderProfile() {
      let rate_dta = {
        "profile": parseInt(this.userdata.lender_profile.id),
        "score": Math.round(this.rating)
      };
      return await this.userdata.lender_profile.my_rating ? this.$api.$patch(`/lender-profile-ratings/${this.$route.params.id}/`, rate_dta) : this.$api.$post(`/lender-profile-ratings/`, rate_dta)
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);
        });
    }

  }
}
</script>
<style>
.basil {
  background-color: #fffbe6 !important;
}

.basil--text {
  color: #356859 !important;
}
</style>
