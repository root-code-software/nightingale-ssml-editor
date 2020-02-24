/**
  Copyright 2020 Google Inc. All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
/**
 * @fileoverview Logic handler for <p> tag.
 */

module.exports = {
  getTimelineHtml: (data) => {
    return `<span class="audio-description">
            <img src="./images/mic.png" />
            ${data.text}
            </span>`;
  },
  getSsml: (data) => {
    return `<p>${data.text}</p>`;
  },
  getOuterSsml: (data) => {
    return `<speak>${module.exports.getSsml(data)}</speak>`;
  },
  getEditor: (data) => {
    return {
      html: `<paper-input data-attr="text" always-float-label
        label="Say something" value="${data.text}"></paper-input>`,
      onOpen: () => {},
    }
  },
}
