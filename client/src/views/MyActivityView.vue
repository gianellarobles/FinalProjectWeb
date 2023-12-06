<script setup lang="ts">

</script>

<template>
    <div class="activity">
    
          <section class="section">
            <div class="container">
                <div class="columns has-text-white">
                    <div class="column">
                        <p class="red title is-1"> Plan: </p>
                        <p class="title is-5 has-text-dark">&nbsp;Let's see what the right plan is for you, </p> 

                        <p class="title is-6 has-text-dark" > &nbsp;I want to start off and say exercising at least for 30 minutes can truly make a difference in our lives! Exercises at least once a day don't have to mean going to the gym everyday. Some exercise ideas can include: </p>

                        <div class="content is-small">
                        <ol class="title is-6 has-text-dark">
                            <li>Yoga</li>
                            <li>Pilates</li>
                            <li>Karate</li>
                            <li>Lifting weights</li>
                            <li>Walking/Running</li>
                        </ol>
                        </div>
                    
                        <div class="field">
                            <label class="label has-text-dark">Exercise</label>
                            <div class="control">
                                <div class="select is-danger">
                                 <select>
                                    <option>Select Exercise</option>
                                     <option>Yoga</option>
                                     <option>Pilates</option>
                                     <option>Karate</option>
                                     <option>Lifting weights</option>
                                    <option>Walking</option>
                                     <option>Running</option>
                                     <option>Other</option>
                                     </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                                <label class="label has-text-dark">Time</label>
                                <div class="control">
                                    <div class="select is-danger">
                                          <select>
                                            <option>Select Time</option>
                                            <option>5 min</option>
                                            <option>10 min</option>
                                            <option>15 min</option>
                                            <option>30 min</option>
                                            <option>45 min</option>
                                            <option>1 hour</option>
                                            <option>More than 1 hour</option>
                                        </select>
                                    </div>
                                     <p class="help is-success is-danger">Great Job!</p>
                                </div>
                            </div>                
                        <div class="field">
                            <label class="label has-text-dark">Message</label>
                            <div class="control">
                                <textarea class="textarea is-danger" placeholder="Textarea"></textarea>
                            </div>
                        </div>
                
                       <p class="title is-6 has-text-dark">Would you do this excerise again?</p>
                        <div class="field">
                            <div class="control">
                                <label class="radio has-text-dark">
                                    <input type="radio" name="question">
                                     Yes
                                </label>
                                <label class="radio has-text-dark">
                                    <input type="radio" name="question">
                                    No
                                </label>
                            </div>
                        </div>
                    
                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-danger">Submit</button>
                            </div>
                            <div class="control">
                                <button class="button has-text-danger is-light">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
@media (min-width: 640px) {
    .activity{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
}
</style>
