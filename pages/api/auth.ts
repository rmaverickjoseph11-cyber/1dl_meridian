/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import {NextApiRequest, NextApiResponse} from "next";

import supabase from "../../src/server";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	supabase.auth.api.setAuthCookie(req, res);
}

export default handler;
