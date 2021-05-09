<template>
  <v-stepper v-model="curr">
    <v-stepper-header>
      <v-stepper-step
        v-for="(step, n) in steps"
        :key="n"
        :color="stepStatus(n + 1)"
        :complete="stepComplete(n + 1)"
        :rules="[value => !!step.valid]"
        :step="n + 1"
      >
        {{ step.name }}
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12">
          <v-card-text>
            Please enter the address from which you will be starting the trip
            <v-form :ref="'form1'" v-model="steps[0].valid" lazy-validation>
              <v-text-field
                v-model="start"
                :rules="steps[0].rules"
                label="Starting Address"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
        <v-btn color="primary" @click="validate(0)">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12">
          <v-card-text>
            Please enter the address at which you will be ending the trip
            <v-form :ref="'form2'" v-model="steps[1].valid" lazy-validation>
              <v-text-field
                v-model="destination"
                :rules="steps[1].rules"
                label="Destination Address"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
        <v-btn color="primary" @click="validate(1)">
          Continue
        </v-btn>
        <v-btn text color="info" @click="reset()"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-6 pa-2" height="200px">
          <v-card-text>
            Enter the date and time which corresponds with when this Blood
            Glucose value was taken.

            <v-form :ref="'form3'" v-model="steps[1].valid" lazy-validation>
              <v-dialog
                ref="dialog1"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Select a date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="steps[2].rules"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog1.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <v-dialog
                ref="dialog"
                v-model="modal2"
                :return-value.sync="time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time"
                    label="Select a time"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="steps[2].rules"
                  ></v-text-field>
                </template>
                <v-time-picker v-if="modal2" v-model="time" full-width>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal2 = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(time)">
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </v-form>
          </v-card-text>
        </v-card>
        <v-btn color="primary" @click="validate(2)"> Continue </v-btn>
        <v-btn text color="info" @click="reset()"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="mb-12">
          <v-card-text>
            Please enter the number of passenger seats available in your vehicle
            <v-form :ref="'form4'" v-model="steps[3].valid" lazy-validation>
              <v-text-field
                v-model="seats"
                :rules="steps[3].rules"
                label="Seats Available"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
        <v-btn color="primary" @click="validate(3)">
          Continue
        </v-btn>
        <v-btn text color="info" @click="reset()"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-card class="mb-12">
          <v-card-text>
            Please review your choices and if everything appears correct, press
            'Confirm' to create your trip
          </v-card-text>
          <v-card-text class="text-overline">
            Starting Address:
            <v-chip>
              <v-icon class="mr-2" color="primary">mdi-home</v-icon>
              {{ start }}</v-chip
            >
          </v-card-text>
          <v-card-text class="text-overline">
            Destination Address:
            <v-chip>
              <v-icon class="mr-2" color="primary">mdi-map-marker</v-icon>
              {{ destination }}</v-chip
            >
          </v-card-text>
          <v-card-text class="text-overline">
            Starting Time:
            <v-chip>
              <v-icon class="mr-2" color="primary">mdi-clock</v-icon>
              {{ date }}, {{ time }}
            </v-chip>
          </v-card-text>
          <v-card-text class="text-overline">
            Seats Available:
            <v-chip>
              <v-icon class="mr-2" color="primary">mdi-seat</v-icon> {{ seats }}
            </v-chip>
          </v-card-text>
        </v-card>
        <v-btn color="success" @click="submit()">
          Confirm
        </v-btn>
        <v-btn text color="info" @click="reset()"> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    confirmed: false,
    curr: 1,
    valid: false,
    start: "",
    destination: "",
    form1: [],
    form2: [],
    form3: [],
    date: null,
    time: null,
    modal2: false,
    modal: false,
    seats: null,
    steps: [
      {
        name: "Starting Address",
        rules: [v => !!v || "Required"],
        valid: true
      },
      {
        name: "Destination Address",
        rules: [v => !!v || "Required"],
        valid: true
      },
      {
        name: "Starting Time",
        rules: [v => !!v || "Required"],
        valid: true
      },
      {
        name: "Seats Available",
        rules: [v => !!v || "Required"],
        valid: true
      },
      {
        name: "Review",
        valid: true
      }
    ]
  }),
  methods: {
    ...mapActions("modules/trip/trip", ["setData", "setConfirmed"]),
    stepComplete(step) {
      return this.curr > step;
    },
    stepStatus(step) {
      return this.curr > step ? "green" : "blue";
    },
    validate(n) {
      this.steps[n].valid = false;
      let v = null;
      if (n === 0) {
        v = this.$refs.form1.validate();
      } else if (n === 1) {
        v = this.$refs.form2.validate();
      } else if (n === 2) {
        v = this.$refs.form3.validate();
      } else {
        v = this.$refs.form4.validate();
      }
      if (v) {
        this.steps[n].valid = true;
        // continue to next
        this.curr += 1;
      }
    },
    done() {
      this.curr = 10;
    },
    reset() {
      this.$refs.form1.reset();
      this.$refs.form2.reset();
      this.$refs.form3.reset();
      this.curr = 1;
    },
    submit() {
      const payload = {
        Time: this.date + "T" + this.time + ":00Z",
        StartAddress: this.start,
        EndAddress: this.destination,
        SpaceAvailable: parseInt(this.seats)
      };
      this.setData(payload);
      this.setConfirmed(true);
      this.done();
    }
  }
};
</script>
